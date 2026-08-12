# Syncstorage-rs

Mozilla Sync Storage built with [Rust](https://rust-lang.org) — the server behind Firefox Sync. Self-hosting it keeps your bookmarks, history, open tabs, passwords and preferences on hardware you control.

Authentication still goes through [Mozilla accounts](https://accounts.firefox.com/). This is safe by design: the account server never learns your plaintext password and cannot decrypt your sync data, so a self-hosted storage node combined with Mozilla-hosted accounts gives you data ownership without running your own identity provider.

This package deploys the official MySQL build of Syncserver with Tokenserver enabled, plus a single MySQL database shared by both services — the same layout Mozilla's own PostgreSQL recipe uses, which halves the database footprint compared to their MySQL recipe. Schema migrations run automatically on first start, and a small one-shot init container registers this instance as the `sync-1.5` storage node so the stack is ready to serve immediately.

## Pointing Firefox at your server

The tokenserver URL is your app URL with `/1.0/sync/1.5` appended, for example `https://sync.example.com/1.0/sync/1.5`.

**Desktop:** open `about:config`, find `identity.sync.tokenserver.uri`, set it to the URL above, then restart Firefox. Verify in `about:sync-log`.

**Android:** Settings → About Firefox, tap the logo six times to enable the debug menu, go back to Settings → Sync Debug → "custom sync server", set the URL, then use "Stop Firefox" in the same menu so the change applies. Do this **before** signing in.

**iOS:** tap the version number five times to enable debug mode, then set the custom sync server under the Advanced Sync Settings in the Mozilla account section, while signed out.

Sign out of Sync and back in after changing the URL — existing accounts keep using the node they were first assigned.

## Notes

- **Expose it over HTTPS.** Firefox will not sync against a plaintext remote server, and the tokenserver URL must match the URL clients actually reach.
- **amd64 only.** Mozilla publishes the Syncserver images for `linux/amd64`; there is no arm64 build.
- **Version tags are commit SHAs.** Mozilla does not publish `latest` or semver tags for the MySQL image, so updates mean pinning a newer SHA from the [packages page](https://github.com/mozilla-services/syncstorage-rs/pkgs/container/syncstorage-rs%2Fsyncstorage-rs-mysql) rather than following a release number. Renovate cannot track this image.
- **The storage node is registered by an init container, not by the server.** Upstream added a `SYNC_TOKENSERVER__INIT_NODE_URL` setting that self-registers the node, but every currently published MySQL image predates it, so the variable is silently ignored. The `syncstorage-rs-init` service performs the same insert Mozilla's own code does. Without it the tokenserver has no node to assign and sync fails after login.
- **If you change the app's domain**, the registered node URL no longer matches the URL clients use. Update it with:
  `UPDATE nodes SET node = '<new url>' WHERE service = (SELECT id FROM services WHERE service = 'sync-1.5');`
  in the tokenserver database, and have clients sign out and back in so they are reassigned.
- **Back up the master secret.** It derives the token signing keys; changing it invalidates every issued sync token and forces all clients to re-authenticate.
- Health is served at `/__heartbeat__`.
