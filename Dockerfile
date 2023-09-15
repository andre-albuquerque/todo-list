FROM node:current-alpine3.17 as dependecies
WORKDIR /todo-list
COPY package.json ./
RUN npm install

FROM node:current-alpine3.17 as builder
WORKDIR /todo-list
COPY . .
COPY --from=dependecies /todo-list/node_modules ./node_modules
RUN npm run build

FROM node:current-alpine3.17 as runner
WORKDIR /todo-list
ENV NODE_ENV production

COPY --from=builder /todo-list/public ./public
COPY --from=builder /todo-list/.next ./.next
COPY --from=builder /todo-list/node_modules ./node_modules
COPY --from=builder /todo-list/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]