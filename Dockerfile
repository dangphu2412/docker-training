FROM node:18-alpine
LABEL authors="phu.dangn"

WORKDIR /app

RUN corepack enable
RUN corepack prepare pnpm@8.5.1 --activate
COPY . .
RUN pnpm run build

ENTRYPOINT ["pnpm", "start"]
