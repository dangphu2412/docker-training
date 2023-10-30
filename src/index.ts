import express from 'express';
import {registerUserModule} from "./modules/users";
import {registerDatabaseModule} from "./modules/db";

const app = express()

registerUserModule(app);
registerDatabaseModule();

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
