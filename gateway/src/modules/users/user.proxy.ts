import {Express} from "express";
import proxy from 'express-http-proxy';

export function registerUserModule(app: Express) {
  return app.use('/users', proxy('http://localhost:3001'));
}
