FROM node:22-alpine3.22 AS builder

WORKDIR /src
COPY . .
RUN npm install --legacy-peer-deps

FROM node:22-alpine3.22 AS runner

WORKDIR /src

RUN apt-get update && apt-get upgrade -y \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/package.json ./package.json
COPY --from=builder /src/tsconfig.json ./tsconfig.json
COPY --from=builder /src ./

EXPOSE 4000
CMD [ "npm", "run", "dev" ]