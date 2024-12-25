import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'user-service',
  brokers: ['localhost:9092', 'localhost:9093', 'localhost:9094']
});

export const producer = kafka.producer()
export const consumer = kafka.consumer({ groupId: 'user-service' });

export async function registerKafka() {
  console.log('Connecting Kafka')

  await producer.connect();

  console.log('Connect Kafka success')
}
