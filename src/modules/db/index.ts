import {DbConnector} from "./db.connector";

export async function registerDatabaseModule() {
  await new DbConnector('mongodb://localhost:27017/test').connect();
}
