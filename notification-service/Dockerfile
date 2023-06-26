FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm install -g sucrase nodemon
RUN npm install
COPY . .
CMD ["sucrase-node", "src/index.ts"]