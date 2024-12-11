import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'user-service',
  brokers: ['localhost:9092', 'localhost:9093']
});

export const producer = kafka.producer()
export const consumer = kafka.consumer({ groupId: 'user-service' });

export async function registerKafka() {
  console.log('Connecting Kafka')

  await producer.connect();
  await kafka.admin().createTopics({
    topics: [
      { topic: 'SEND_NOTIFICATION' }
    ]
  });

  console.log('Connect Kafka success')
}
