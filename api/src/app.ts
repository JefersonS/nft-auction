import express from 'express';
import { Kafka, Producer } from 'kafkajs';
import routes from './routes';

// infering Producer to express Request type
declare module 'express-serve-static-core' {
  interface Request {
    producer: Producer
  }
}

class App {
  public express: express.Application
  public kafka: Kafka
  public producer: Producer

  public constructor () {
    this.express = express()
    this.startKafka()
    this.middlewares()
    this.routes()
  }

  private startKafka (): void {
    this.kafka = new Kafka({ clientId: process.env.KAFKA_CLIENT_ID!, brokers: [process.env.KAFKA_SERVERS!] });
    this.producer = this.kafka.producer();
  }

  private middlewares (): void {
    this.express.use((req, _, next) => {
      req.producer = this.producer;
      return next();
    });
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App()
