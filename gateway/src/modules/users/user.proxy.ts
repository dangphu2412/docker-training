import {Express} from "express";
import proxy from 'express-http-proxy';

export function registerUserModule(app: Express) {
  return app.use('/users', (req, res, next) => {
    console.log('Incomming');
    return next();
  }, proxy('http://localhost:3001'));
}
