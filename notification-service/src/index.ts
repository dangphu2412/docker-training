import "dotenv/config";
import express from 'express';
import {registerNotificationModule} from "./modules/notifications";
import {registerKafka} from "./modules/kafka";

const app = express()

async function bootstrap() {
    await registerKafka();
    await registerNotificationModule(app);

    app.listen(3002, () => {
        console.log('Listening on port 3002');
    });
}

bootstrap();
