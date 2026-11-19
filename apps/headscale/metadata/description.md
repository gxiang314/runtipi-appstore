## Headscale

[Headscale](https://github.com/juanfont/headscale) is an open-source, self-hosted implementation of the Tailscale control server. The official Tailscale clients (Linux, macOS, Windows, Android, iOS) can join a tailnet run by Headscale instead of Tailscale's hosted service, so no Tailscale account is needed.

### Before you install

- **Expose the app on a domain** (e.g. `headscale.example.com`) with HTTPS. Clients reach Headscale at that URL.
- **Do not put it behind Cloudflare proxy (orange cloud) or Cloudflare Tunnel.** The Tailscale protocol needs WebSocket POSTs, which Cloudflare does not support. Use a DNS-only (grey cloud) record.
- The default DERP map uses Tailscale's public relays. They only relay end-to-end encrypted WireGuard traffic and need no account.

### First steps

Run these on the host (`<container>` is the Headscale container name):

```sh
docker exec <container> headscale users create me
docker exec <container> headscale users list                      # note the user ID
docker exec <container> headscale preauthkeys create --user <ID> --expiration 1h
```

Then on each client:

```sh
tailscale up --login-server https://headscale.example.com --authkey <key>
```

On Android, open the Tailscale app → ⋮ → **Change server** and enter the URL. Approve advertised subnet routes with `headscale nodes approve-routes`.

Configuration is passed through `HEADSCALE_*` environment variables (no config file). Data lives in `data/lib` (SQLite database and the noise private key — back it up).
