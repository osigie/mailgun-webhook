import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.MONGODB_URL as string;
const vars = {
  mongodb: {
    url: url,
  },
};

async function connectToMongo() {
  try {
    const connection = await mongoose.connect(vars.mongodb.url);
    return connection;
  } catch (error) {
    throw error;
  }
}

export { connectToMongo };
