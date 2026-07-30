# Apple Inventory Bot

Monitors Apple's refurbished store and sends Telegram alerts when watched products appear.

## Features

- **Price in every alert** — price leads the message, in bold, so you can judge without opening the link.
- **Listed and sold notices** — a machine appearing is announced; a good deal disappearing is announced too, so you know when you missed one.
- **Price history judgement** — every price seen is recorded, so the bot can tell you whether a listing is the cheapest that spec has been in 90 days.
- **Per-spec watch rules** — watch several specs at once via `watch.yml`, and change the rules by messaging the bot.

## Setup

1. Create a bot with [@BotFather](https://t.me/BotFather) and get the bot token.
2. Get your chat ID and user ID (e.g. via [@userinfobot](https://t.me/userinfobot)).
3. Fill in the token, chat ID, and owner ID when installing.
4. Optionally set a public webhook URL (`https://<your-domain>/webhook/telegram`); leave it empty to use polling.

Data (watch rules and price history) is stored in the app data directory.
