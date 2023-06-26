import { Kafka } from 'kafkajs';
import NotificationController from './controllers/NotificationController'
import { NotificationMessageInterface } from './types/NotificationMessageInterface';

const kafka = new Kafka({
  brokers: [process.env.KAFKA_SERVERS!],
  clientId: process.env.KAFKA_CLIENT_ID!
});

const topic = process.env.KAFKA_TOPIC!;
const consumer = kafka.consumer({groupId: 'notification-group'});

async function run() {
  await consumer.connect();
  await consumer.subscribe({ topic });
  await consumer.run({
    eachMessage: async ({ message }) => {
      if (message?.value === undefined || message?.value === null) {
        console.log(`UNEXPECTED ERROR: message is invalid ${message}`)
        return
      }
      const parsedMessage: NotificationMessageInterface = JSON.parse(message.value.toString())
      const notificatioController = new NotificationController(parsedMessage.message)
      await notificatioController.shootNotification()
    }
  })
};

run().catch(console.error);