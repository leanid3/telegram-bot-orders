# Этап сборки
FROM node:20-alpine AS deps
WORKDIR /app
COPY ./app/package*.json .
RUN npm ci 

# Финальный этап
FROM node:20-alpine AS production
WORKDIR /app

COPY ./app/package*.json .
COPY --from=deps /app/node_modules ./node_modules
COPY ./app .

CMD ["npm", "start"]
