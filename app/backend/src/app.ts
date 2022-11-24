import express from 'express';
import 'express-async-errors';
import UsersRoute from './routes/users.routes';
import UserAnimesRoute from './routes/user.animes.routes';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use('/users', UsersRoute);
app.use('/animes', UserAnimesRoute);
app.use(errorMiddleware);
app.use((req, res) => res.send('OK'));

export default app;
