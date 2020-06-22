# FROM node:12 AS builder
FROM node:12

WORKDIR /usr/src/app

COPY ./package* ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000 
CMD ["npm", "run", "start:prod"]
