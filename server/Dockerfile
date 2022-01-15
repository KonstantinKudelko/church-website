# Install dependencies only when needed
FROM node:14.18.1-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk update && apk add libc6-compat && rm -rf /var/cache/apk/*

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

# Rebuild the source code only when needed
FROM node:14.18.1-alpine AS builder

# Install curl & bash for node-prune installation
RUN apk update && apk add curl bash && rm -rf /var/cache/apk/*
# Install node-prune (https://github.com/tj/node-prune)
RUN curl -sfL https://gobinaries.com/tj/node-prune | bash -s -- -b /usr/local/bin

WORKDIR /app

COPY . .

COPY --from=deps /app/node_modules ./node_modules

# Build application
RUN npm run build
# Remove development dependencies
RUN npm prune --production
# Run node-prune utility
RUN /usr/local/bin/node-prune

# Production image, copy all the files and run strapi
FROM node:14.18.1-alpine AS runner

WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S strapi -u 1001

COPY --from=builder /app/build ./build
COPY --from=builder /app/.cache ./.cache
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

USER strapi

CMD ["npm", "start"]
