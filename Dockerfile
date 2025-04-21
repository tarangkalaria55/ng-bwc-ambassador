FROM node:23.11.0-slim

WORKDIR /app

RUN npm install -g @angular/cli

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4200
