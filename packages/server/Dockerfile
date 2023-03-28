FROM node:16-bullseye

RUN apt-get update && apt-get install -y fswebcam

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "server"]
