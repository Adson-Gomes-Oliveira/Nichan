import app from './app';
import * as dotenv from 'dotenv'
import connectToDatabase from './models/connection';
dotenv.config({ path: __dirname+'/.env' });

const port = process.env.PORT;

connectToDatabase()
  .then(() => {
    app.listen(port, () => console.log('Running Nichan Server on 3001'));
  })
  .catch((error) => {
    console.log('Connection with database generated an error:\r\n');
    console.error(error);
    console.log('\r\nServer initialization cancelled');
    process.exit(0);
  });
