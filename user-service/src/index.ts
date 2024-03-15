import "dotenv/config";
import express from 'express';
import {registerUserModule} from "./modules/users";
import {registerDatabaseModule} from "./modules/db";
// import {registerCache} from "./modules/cache/cache";

const app = express()

registerUserModule(app);
registerDatabaseModule();
// registerCache();

app.listen(3001, () => {
    console.log('Listening on port 3001');
});
