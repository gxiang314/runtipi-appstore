# HonKit

HonKit builds books and documentation websites from Markdown or AsciiDoc files kept in a plain folder. It is a maintained fork of the legacy GitBook toolchain, so existing GitBook books, themes, plugins and `book.json` settings keep working while running on modern Node.js.

## How it works

Your book lives in the app data folder on the host, at `app-data/honkit/data/book`. On first start the app scaffolds a minimal book there (`README.md` and `SUMMARY.md`) if one is not already present. The container then serves it as a static website.

The file watcher is enabled, so edits made on disk are rebuilt and pushed to the browser without restarting the app. Point your editor, a sync tool or a git checkout at that folder and write.

## Writing a book

- `README.md` is the introduction page.
- `SUMMARY.md` is the table of contents and defines the chapter order:

```markdown
# Summary

- [Introduction](README.md)
- [First chapter](chapter-1.md)
- [Second chapter](chapter-2.md)
```

- `book.json` is optional and configures the title, theme and plugins.

Anything not listed in `SUMMARY.md` is not part of the navigation.

## Notes

- The generated site is written to `_book` inside the same folder.
- The image ships Calibre, so `honkit pdf`, `honkit epub` and `honkit mobi` can be run manually inside the container to export ebooks.
- Only `amd64` is supported, because the bundled Calibre build is x86_64 only.
- There is no built-in authentication. Keep the app private, or put an authentication middleware in front of it before exposing it to the internet.
