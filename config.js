export default {
  allowedCommands: [
    "^bun install --frozen-lockfile$",
    "^bun ./scripts/update-config.ts .+$",
    "^bunx @biomejs/biome check --write$",
    "^bun run test$",
  ],
  redisUrl: process.env.RENOVATE_REDIS_URL,
  hostRules: [
    {
      hostType: "docker",
      matchHost: "index.docker.io",
      username: process.env.DOCKERHUB_USERNAME,
      password: process.env.DOCKERHUB_TOKEN,
    },
    {
      hostType: "docker",
      matchHost: "hub.docker.com",
      username: process.env.DOCKERHUB_USERNAME,
      password: process.env.DOCKERHUB_TOKEN,
    },
    {
      hostType: "docker",
      abortOnError: false,
      concurrentRequestLimit: 2,
    },
  ],
};
