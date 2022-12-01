import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import helmet from 'helmet';
import UsersRoute from './routes/users.routes';
import UserAnimesRoute from './routes/user.animes.routes';
import CommentsRoute from './routes/comments.routes';
import LoginRoute from './routes/login.routes';
import errorMiddleware from './middlewares/error.middleware';
import AuthMiddleware from './middlewares/auth.middleware';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use('/login', LoginRoute);
app.use('/users', UsersRoute);
app.use(AuthMiddleware.verifyToken);
app.use('/animes', UserAnimesRoute);
app.use('/comments', CommentsRoute);
app.use(errorMiddleware);
app.use((req, res) => res.send('OK'));

export default app;
