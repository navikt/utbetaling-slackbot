# Utbetaling Slack-bot

Enkel slack app som sender ut forskjellige meldinger til Utbetaling sine kanaler. Basert på https://github.com/navikt/aap-teamslackbot

## Kjør lokalt

Du trenger Node.js 22, pnpm og en Slack-app med Socket Mode. Legg `SLACK_BOT_TOKEN`, `SLACK_SIGNING_SECRET` og `SLACK_APP_TOKEN` i `.env.local`. Ikke legg tokenverdier i Git.

```bash
pnpm install
pnpm build
pnpm dev
```
