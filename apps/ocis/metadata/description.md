# ownCloud Infinite Scale (oCIS)

ownCloud Infinite Scale is the next generation of ownCloud, rewritten from scratch in Go. It ships as a single binary with no PHP runtime and no external database — file metadata is stored directly in the storage backend.

## Features

- File sync & share with web UI, desktop and mobile clients
- Spaces: shared team folders with their own quota and permissions
- Built-in identity provider (IDM) — no external LDAP required
- Full-text search, thumbnails and file previews
- WebDAV and OCS API compatible

## Setup

Log in with username `admin` and the password you set during installation.

Note: oCIS is designed to be served over HTTPS. For full functionality (especially the web login), expose the app on a domain with HTTPS enabled.
