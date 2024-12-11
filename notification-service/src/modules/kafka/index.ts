import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'notification-service',
  brokers: ['localhost:9092', 'localhost:9093']
});

export const producer = kafka.producer()
export const consumer = kafka.consumer({ groupId: 'notification-service' });

export async function registerKafka() {
  console.log('Connecting Kafka')

  await producer.connect();

  console.log('Connect Kafka success')
}
