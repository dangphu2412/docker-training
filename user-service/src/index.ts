import "dotenv/config";
import express from 'express';
import {registerUserModule} from "./modules/users";
import {registerDatabaseModule} from "./modules/db";
import {registerKafka} from "./modules/kafka";
// import {registerCache} from "./modules/cache/cache";

const app = express()

async function bootstrap() {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    registerUserModule(app);
    await registerDatabaseModule();
    await registerKafka();

    app.listen(3001, () => {
        console.log('Listening on port 3001');
    });
}

bootstrap();
