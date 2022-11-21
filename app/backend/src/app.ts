import express from 'express';
import 'express-async-errors';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use(errorMiddleware);
app.use((req, res) => res.send('OK'));

export default app;
