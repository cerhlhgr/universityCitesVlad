FROM node:16.13.2-alpine AS development

WORKDIR ./opt/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm install
