# OpenCloud

OpenCloud is a modern file sync and share platform written in Go. It is a fresh rewrite of the classic ownCloud stack rather than a fork: a single binary bundles storage, identity, the web UI and WebDAV, so it starts in seconds and runs comfortably on a home server.

Keep your files on your own hardware, sync them to desktop and mobile, and share them with links you control.

## Features

- **Fast and lightweight:** One Go binary, no PHP stack, no external database required for a basic install.
- **Sync everywhere:** Works with the OpenCloud desktop client and the iOS/Android apps.
- **Sharing with control:** Share files and folders with internal users or via public links, with per-share permissions and expiry dates.
- **Spaces:** Project drives with their own members and quotas, separate from personal storage.
- **Full WebDAV:** Mount your storage in any WebDAV-capable file manager.
- **Built-in identity:** Ships its own OpenID Connect provider, and can be pointed at Keycloak or another external IdP instead of it.
- **Document collaboration:** Optional Collabora Online or OnlyOffice integration for editing documents in the browser.

## Configuration

The administrator username is fixed to **`admin`** by OpenCloud. The password you enter during installation is the one for that account, and it must be at least 8 characters — OpenCloud's password policy rejects anything shorter.

Enable **Create demo users** only for testing. It seeds well-known sample accounts, which you do not want on a server reachable from the internet.

## First login

After installation, open the app and sign in as `admin` with the password you configured. You can change it from the web UI afterwards.

## Notes

OpenCloud's built-in identity provider requires an `https://` issuer URL, so this app always advertises itself as `https://<your-domain>`. TLS is terminated by Runtipi's reverse proxy and OpenCloud itself listens on plain HTTP behind it (`PROXY_TLS=false`).

Because of that, **expose the app through Runtipi with HTTPS** before using it. Reaching it over plain `http://` will break the login redirect, and the desktop and mobile sync clients require a valid HTTPS endpoint in any case.

WebDAV basic auth is disabled by default; the web UI and official clients use OpenID Connect instead.
