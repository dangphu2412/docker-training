import "dotenv/config";
import express from 'express';
import {registerUserModule} from "./modules/users";
import {registerDatabaseModule} from "./modules/db";
// import {registerCache} from "./modules/cache/cache";

const app = express()

async function bootstrap() {
    registerUserModule(app);
    await registerDatabaseModule();

    app.listen(3001, () => {
        console.log('Listening on port 3001');
    });
}

bootstrap();
