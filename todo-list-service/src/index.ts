import express from 'express';
import {registerUserModule} from "./modules/users";
import {registerDatabaseModule} from "./modules/db";
import {registerCache} from "./modules/cache/cache";

const app = express()

registerUserModule(app);
registerDatabaseModule();
registerCache();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
