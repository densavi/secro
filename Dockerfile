FROM node:14-alpine AS deps

# If we need libc for any of your deps, uncomment this line:
# RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production
RUN mv node_modules/ prod_modules/
RUN yarn install

FROM node:14-alpine AS BUILD_IMAGE
WORKDIR /app
ENV NODE_ENV production
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

FROM node:14-alpine
WORKDIR /app
COPY --from=deps /app/prod_modules /app/node_modules
COPY --from=BUILD_IMAGE /app/.next /app/.next
COPY --from=BUILD_IMAGE /app/package.json /app/yarn.lock ./
COPY --from=BUILD_IMAGE /app/public /app/public
COPY --from=BUILD_IMAGE /app/next.config.js  /app/next.config.js
EXPOSE 3000

CMD [ "yarn", "start" ]
