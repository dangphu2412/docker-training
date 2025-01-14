import {DbConnector} from "./db.connector";
import * as process from "process";

export async function registerDatabaseModule() {
  const url = process.env['MONGO_URL'];

  if (!url) {
    throw new Error('MONGO_URL is not defined');
  }
  await new DbConnector(url).connect();
}
