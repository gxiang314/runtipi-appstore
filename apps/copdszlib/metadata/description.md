# cOPDSzlib

An OPDS 1.2 catalog that lets [Readest](https://readest.com) and other OPDS readers search Library Genesis and download books directly.

## Features

- **Search that finds CJK titles** — Traditional and Simplified spellings are both searched, and partial titles are completed from Douban suggestions.
- **Field keywords** — `title:`, `author:` and `isbn:` (also `書名:` / `作者:`) restrict a search to one field.
- **One entry per book** — formats of the same book (matched by ISBN and title) are grouped, so the reader shows a format menu.
- **Recommendation lists** — Douban Top 250, Open Library trending, and Taiwan bestsellers from Readmoo, Kingstone and TAAZE; every item opens a feed of downloadable copies, with related books alongside.
- **Web UI** — search, a download queue with progress, library and settings.

## Setup

1. Choose a username and password when installing; every route (OPDS, web UI, API) requires them.
2. In Readest, add an OPDS catalog at `http://<server>:8399/opds` with those credentials.
3. If you expose the app on a domain over HTTPS, set **Public base URL** so feed links use it.

The library database and download history are stored in the app data directory.
