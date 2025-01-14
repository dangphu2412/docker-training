import * as mongoose from "mongoose";

export class DbConnector {
  constructor(private url: string) {}

  async connect() {
    console.log('DB Connecting');
    try {
      await mongoose.connect(this.url);
      console.log('DB Connect success')
    } catch (e) {
      console.log(e);
      process.exit(1);
    }
  }
}
