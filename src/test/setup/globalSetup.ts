import { MongoMemoryServer } from "mongodb-memory-server";

const globalSetup = async () => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  global.mongoServer = mongoServer
  global.mongoUri = mongoUri
};

export default globalSetup;
