import mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = `mongodb://${ process.env.DB_HOST || 'localhost' }:${ process.env.DB_PORT || 27017}/Nichan`;

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;
