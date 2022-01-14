# First stage
FROM node:14.18.1-alpine as builder

# Install dependencies for node-gyp
RUN apk update && apk add python3 make g++ curl bash && rm -rf /var/cache/apk/*

# Install node-prune (https://github.com/tj/node-prune)
RUN curl -sfL https://gobinaries.com/tj/node-prune | bash -s -- -b /usr/local/bin

WORKDIR /app

COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci
# Build application
RUN npm run build --clean
# Remove development dependencies
RUN npm prune --production
# Run node-prune utility
RUN /usr/local/bin/node-prune

# Second stage
FROM node:14.18.1-alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/.cache ./.cache
COPY --from=builder /app/node_modules ./node_modules

CMD ["npm", "start"]
