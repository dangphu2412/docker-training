import express from 'express';
import {registerUserModule} from "./modules/users";

const app = express()

registerUserModule(app);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
