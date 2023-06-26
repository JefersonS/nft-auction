FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install -g nodemon
RUN npm install
COPY . .
CMD ["nodemon", "src/server.ts"]