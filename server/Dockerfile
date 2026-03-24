FROM node:22-alpine3.22 AS builder

WORKDIR /src
COPY package*.json ./
RUN npm ci --legacy-peer-deps

COPY . .
RUN npm run build

FROM node:22-alpine3.22 AS runner

WORKDIR /src

RUN apk update && apk upgrade

COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/package.json ./package.json
COPY --from=builder /src/tsconfig.json ./tsconfig.json
COPY --from=builder /src ./

EXPOSE 4000
CMD [ "npm", "run", "dev" ]