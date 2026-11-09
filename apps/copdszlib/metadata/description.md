# cOPDSzlib

An OPDS 1.2 catalog that lets [Readest](https://readest.com) and other OPDS readers search Library Genesis and download books directly.

## Features

- **Search that finds CJK titles** — Traditional and Simplified spellings are both searched, and partial titles are completed from Douban suggestions.
- **Field keywords** — `title:`, `author:` and `isbn:` (also `書名:` / `作者:`) restrict a search to one field.
- **One entry per book** — formats of the same book (matched by ISBN and title) are grouped, so the reader shows a format menu.
- **Recommendation lists** — Douban Top 250, Open Library trending, and Taiwan bestsellers from Readmoo, Kingstone and TAAZE; every item opens a feed of downloadable copies, with related books alongside.
- **Legado book sources** — import your own sources; each user sees and manages only their own, and books can be downloaded as EPUB (comics as CBZ).
- **Accounts** — an administrator manages users and per-device app passwords; library, progress and download queue are separate per user.
- **Web UI** — search, a download queue with progress, library, users, and an administrator page for environment settings with a change log.

## Setup

1. Choose the administrator name and password when installing; every route (OPDS, web UI, API) requires them. A master key is generated for you and encrypts secret settings.
2. Sign in to the web UI at `http://<server>:8399`, and create a user or an app password for each reader.
3. In Readest, add an OPDS catalog at `http://<server>:8399/opds` with those credentials.
4. If you expose the app on a domain over HTTPS, set **Public base URL** so feed links use it.

The library database and download history are stored in the app data directory. Back it up together with the master key.
