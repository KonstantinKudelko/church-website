FROM node:lts-alpine

# Install dependencies for node-gyp
RUN apk update && apk add curl bash && rm -rf /var/cache/apk/*

# Install node-prune (https://github.com/tj/node-prune)
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile

ENV API_URL=http://172.24.0.3:1337
ENV VIRTUAL_HOST=rozhdestvo-youth.by

COPY . .
RUN yarn build

# Remove development dependencies
RUN npm prune --production

# Run node-prune utility
RUN /usr/local/bin/node-prune

CMD ["yarn", "run", "start"]
