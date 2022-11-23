import app from './app';
import 'dotenv/config';
import connectToDatabase from './models/connection';

const port = process.env.PORT || 3001;

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
