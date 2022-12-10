import { Router } from 'express';
import CommentsModel from '../models/comments.model';
import CommentsServices from '../services/comments.services';
import CommentsController from '../controllers/comments.controller';

const router = Router();

const CommentsM = new CommentsModel();
const CommentsS = new CommentsServices(CommentsM);
const CommentsC = new CommentsController(CommentsS);

router.get('/', CommentsC.findAll);
router.get('/:id', CommentsC.findOne);
router.post('/register', CommentsC.create);
router.put('/edit/:id', CommentsC.update);
router.delete('/delete/:id', CommentsC.delete);

export default router;
