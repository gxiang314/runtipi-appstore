# Personal Runtipi App Store ⛺

A personal [Runtipi](https://github.com/runtipi/runtipi) app store containing apps that are not in the official store.

This store is meant to run **alongside** the [official app store](https://github.com/runtipi/runtipi-appstore), not to replace it. Add both in Runtipi and you get the official catalogue plus the apps below.

## How to use it

In Runtipi, go to **Settings → App Stores** and add this repository's URL. See the [custom app store guide](https://runtipi.io/docs/guides/create-your-own-app-store).

## Apps available (<!appsCount>)

| App | Name | Description |
| :-: | ---- | ----------- |
<!appsList>

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
