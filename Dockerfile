#Build Stage
FROM node:14-alpine 
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .
COPY .env .

RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0

CMD [ "npm", "start" ]