# cOPDSzlib

An OPDS 1.2 catalog that lets [Readest](https://readest.com) and other OPDS readers search Library Genesis and download books directly.

## Features

- **Search that finds CJK titles** — Traditional and Simplified spellings are both searched, and partial titles are completed from Douban suggestions.
- **Field keywords** — `title:`, `author:` and `isbn:` (also `書名:` / `作者:`) restrict a search to one field.
- **One entry per book** — formats of the same book (matched by ISBN and title) are grouped, so the reader shows a format menu.
- **Recommendation lists** — Douban Top 250, Open Library trending, and Taiwan bestsellers from Readmoo, Kingstone and TAAZE; every item opens a feed of downloadable copies, with related books alongside.
- **Legado book sources** — import your own sources; each user sees and manages only their own. Books show covers in the feed and can be downloaded as EPUB (comics as CBZ).
- **Accounts** — an administrator manages users and per-device app passwords; library, progress and download queue are separate per user.
- **Web UI** — search, a download queue with progress, library and users, with a sidebar (a drawer on phones). The administrator page edits environment settings with a change log; list settings such as `LIBGEN_MIRRORS` and `RECOMMEND_SOURCES` are edited as an ordered list with add, remove and reorder, checked as you type.

## Setup

1. Choose the administrator name and password when installing; every route (OPDS, web UI, API) requires them. A master key is generated for you and encrypts secret settings.
   The other install fields are optional; every setting (`BASE_URL`, `TRUST_PROXY`, `LIBGEN_MIRRORS`, `RECOMMEND_SOURCES`, `LEGADO_*`) can be changed later in the web UI under Admin, without a restart, and a value saved there overrides the install field.
2. Sign in to the web UI at `http://<server>:8399`, and create a user or an app password for each reader.
3. In Readest, add an OPDS catalog at `http://<server>:8399/opds` with those credentials.
4. If you expose the app on a domain over HTTPS, set **Public base URL** so feed links use it.

The library database and download history are stored in the app data directory. Back it up together with the master key.
