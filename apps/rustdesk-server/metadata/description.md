## RustDesk Server

Self-hosted server for [RustDesk](https://rustdesk.com), the open-source remote desktop application. Running your own server keeps all remote-control traffic under your control instead of relying on the public RustDesk infrastructure.

This app runs the two RustDesk OSS server components:

- **hbbs** — the ID/rendezvous server. Handles device registration and NAT hole-punching.
- **hbbr** — the relay server. Relays the connection when a direct P2P link cannot be established.

### Ports

| Port | Protocol | Component | Purpose |
| ---- | -------- | --------- | ------- |
| 21115 | TCP | hbbs | NAT type test |
| 21116 | TCP + UDP | hbbs | ID registration, heartbeat, TCP hole punching |
| 21117 | TCP | hbbr | Relay |
| 21118 | TCP | hbbs | Web client support |
| 21119 | TCP | hbbr | Web client support |

### Setup

1. Install the app. On first start, hbbs generates a key pair in the app data directory (`data/id_ed25519` / `id_ed25519.pub`).
2. In your RustDesk client, open **Settings → Network → ID/Relay Server** and set:
   - **ID Server**: your server's IP or domain
   - **Key**: the contents of `data/id_ed25519.pub`
3. Both hbbs and hbbr share the same data directory, so they use the same key automatically.

> By default the server hands out its own address as the relay. If you run the relay on a different host, adjust the `hbbs` command with `-r <relay-host>:21117`.
