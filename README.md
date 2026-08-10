# Personal Runtipi App Store ⛺

A personal [Runtipi](https://github.com/runtipi/runtipi) app store containing apps that are not in the official store.

This store is meant to run **alongside** the [official app store](https://github.com/runtipi/runtipi-appstore), not to replace it. Add both in Runtipi and you get the official catalogue plus the apps below.

## How to use it

In Runtipi, go to **Settings → App Stores** and add this repository's URL. See the [custom app store guide](https://runtipi.io/docs/guides/create-your-own-app-store).

## Apps available (7)

|                                App                                | Name                                                                    | Description                                                                           |
| :---------------------------------------------------------------: | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
|      <img src="apps/appflowy/metadata/logo.jpg" width="32">       | [AppFlowy](https://github.com/AppFlowy-IO/AppFlowy)                     | Open source alternative to Notion. You are in charge of your data and customizations. |
| <img src="apps/apple-inventory-bot/metadata/logo.jpg" width="32"> | [Apple Inventory Bot](https://github.com/gxiang314/apple-inventory-bot) | Telegram alerts for Apple refurbished stock.                                          |
|      <img src="apps/copyparty/metadata/logo.jpg" width="32">      | [Copyparty](https://github.com/9001/copyparty)                          | Portable file server with resumable uploads, WebDAV and FTP.                          |
|       <img src="apps/jenkins/metadata/logo.jpg" width="32">       | [Jenkins](https://github.com/jenkinsci/docker)                          | The leading open source automation server.                                            |
|        <img src="apps/ocis/metadata/logo.jpg" width="32">         | [ownCloud Infinite Scale](https://github.com/owncloud/ocis)             | File sync & share platform, next generation of ownCloud.                              |
|      <img src="apps/opencloud/metadata/logo.jpg" width="32">      | [OpenCloud](https://github.com/opencloud-eu/opencloud)                  | Modern, lightweight file sync and share platform written in Go.                       |
|   <img src="apps/rustdesk-server/metadata/logo.jpg" width="32">   | [RustDesk Server](https://github.com/rustdesk/rustdesk-server)          | Self-hosted remote desktop relay server.                                              |

## Development

Uses [bun](https://bun.sh) as the runtime and test runner.

```bash
bun install
bun run test   # validates every app in apps/
bun run lint
```

Bumping an app to a new version:

```bash
bun ./scripts/update-config.ts apps/<id>/docker-compose.yml <newVersion> <imageName>
```

Renovate opens these PRs automatically by regex-matching `image:` lines in the compose files. Database images (postgres, mariadb, redis, …) are intentionally pinned and excluded.
