import express from 'express';
import 'express-async-errors';

const app = express();

app.use(express.json());
app.use((req, res) => res.send('OK'));

export default app;
