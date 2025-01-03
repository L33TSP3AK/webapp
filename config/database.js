import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const {
  MONGODB_URI,
  MONGODB_DB_NAME
} = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define MONGODB_URI in .env file');
}

if (!MONGODB_DB_NAME) {
  throw new Error('Please define MONGODB_DB_NAME in .env file'); 
}

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = client.connect();
}

export async function getDatabase() {
  const client = await clientPromise;
  return client.db(MONGODB_DB_NAME);
}

export default clientPromise;