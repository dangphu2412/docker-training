import {DbConnector} from "./db.connector";

export async function registerDatabaseModule() {
  await new DbConnector(process.env['MONGO_URL'] as string).connect();
}
