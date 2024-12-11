import {Express} from "express";
import {consumer} from "../kafka";

export async function registerNotificationModule(app: Express) {
  await consumer.subscribe({
    topic: 'SEND_NOTIFICATION',
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message?.value?.toString(),
        partition,
        topic,
      })
    }
  })
}
