import {DbConnector} from "../db.connector";
import {MigrationDAO} from "../migrate.model";
import {UserDAO} from "../../users/user.model";

async function run() {
  const VERSION = '1.0.0';

  await new DbConnector('mongodb://localhost:27017/test').connect();

  if (await MigrationDAO.exists({ version: VERSION})) {
    console.log('Skip run ' + VERSION);
    process.exit(0);
    return;
  }

  await UserDAO.create([
    {
      name: 'Test1',
    },
    {
      name: 'Test2',
    },
    {
      name: 'Test3',
    }
  ]);

  await MigrationDAO.create({
    version: VERSION
  });
  console.log('Finish run ' + VERSION);

  process.exit(0);
}

run();
