# Builder
FROM node:18-alpine as builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm
RUN pnpm install

COPY . .
RUN pnpm run build && pnpm install --prod

# Runner
FROM node:18-alpine as runner
WORKDIR /app

COPY package.json .
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]
