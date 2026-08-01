# AppFlowy

AppFlowy is an open source alternative to Notion. You are in charge of your data and customizations.

Bring projects, wikis, and teams together with AI. AppFlowy is an AI collaborative workspace where you achieve more without losing control of your data.

## Features

- **Docs** — a rich text editor with markdown support, nested pages, and a wide range of block types.
- **Wiki** — organize knowledge in a nested hierarchy of pages that stays searchable.
- **Projects** — manage tasks with grid, board, and calendar views over the same underlying data.
- **AI** — chat with your workspace, ask questions about your own documents, and generate content inline.
- **Cross platform** — native clients for macOS, Windows, Linux, iOS, and Android, plus the bundled web client.
- **Own your data** — everything stays in your own PostgreSQL database and object storage.

## What this package deploys

This is the complete self-hosted AppFlowy Cloud stack, following the official deployment guide:

| Service | Role |
| --- | --- |
| `appflowy` | AppFlowy Cloud API server |
| `appflowy-web` | Browser client |
| `appflowy-admin-frontend` | Admin console for user management |
| `appflowy-worker` | Background jobs, including imports |
| `appflowy-gotrue` | Authentication service |
| `appflowy-db` | PostgreSQL 16 with pgvector |
| `appflowy-redis` | Cache and job queue |
| `appflowy-minio` | S3 compatible object storage for uploads |
| `appflowy-nginx` | Single entrypoint that routes every path above |

## After installing

1. Open the app and sign in with the admin email and password you set during installation.
2. The admin console lives at `/console`, where you can invite users and manage accounts.
3. To connect a desktop or mobile client, open **Settings → Cloud settings**, choose **AppFlowy Cloud Self-hosted**, and enter your AppFlowy URL.

### Exposing AppFlowy over HTTPS

The desktop and mobile clients connect over WebSockets. If you expose AppFlowy on a domain with HTTPS, set the **WebSocket scheme** setting to `wss`. Leave it as `ws` when using plain HTTP over your local network.

### Email

Sign up confirmation, invitations, and password recovery all need SMTP. Fill in the SMTP settings and turn off **Auto confirm new users** if you want new accounts to verify their email address first.

### Sign up

**Disable public sign up** is on by default, so only people you invite from the admin console can create an account. Turn it off if you want anyone who can reach the URL to register.

### AI features

AI is disabled in this package because it requires an OpenAI API key and two additional services. Core AppFlowy functionality — documents, databases, collaboration, and search — works fully without it.
