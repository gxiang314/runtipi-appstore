# Copyparty

Portable file server with accelerated resumable uploads, dedup, WebDAV, FTP, TFTP, zeroconf, media indexer, thumbnails++ all in one file, no deps.

## ⭐ Features

- **Accelerated resumable uploads** — up/download resumes after network drops, with deduplication
- **File manager** — cut/paste, rename, batch rename, delete, unpost your own uploads
- **Media player** — audio with gapless playback, playlists, transcoding; video and image gallery with thumbnails
- **Search** — by name, path, date, size, or by audio tags and other media metadata
- **Protocols** — HTTP, WebDAV, FTP/FTPS, TFTP, SMB/CIFS, zeroconf (mDNS/SSDP)
- **Share links** — password-protected, expiring shares of files and folders
- **Accounts and volumes** — per-volume read/write/move/delete permissions
- **No dependencies** — a single Python file, runs anywhere

## Configuration

Set the admin username and password in the Runtipi install form. That account gets full read/write/move/delete/admin rights on the share.

**Anonymous access** defaults to *None*, so a login is required for everything. Switching it to *Read-only* lets logged-out visitors browse and download, while uploading, moving and deleting still require the admin login.

Files are served from `<app-data>/data/w`. Media indexing and tag scanning (`-e2dsa -e2ts`) are enabled, which powers search and thumbnails.

### Advanced configuration

For anything beyond the install form — extra accounts, multiple volumes, per-folder permissions — drop a `copyparty.conf` into `<app-data>/data/cfg`, which is loaded automatically:

```yaml
[accounts]
  alice: hunter2

[/pub]           # the URL to serve
  /w/pub         # the filesystem path to serve
  accs:
    r: *         # everyone can read
    rw: alice    # alice can also write
```

See the [documentation](https://github.com/9001/copyparty#readme) for the full config reference.
