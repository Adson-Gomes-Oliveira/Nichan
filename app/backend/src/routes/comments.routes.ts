import { Router } from 'express';
import CommentsModel from '../models/comments.model';
import CommentsServices from '../services/comments.services';
import CommentsController from '../controllers/comments.controller';

const router = Router();

const UserM = new CommentsModel();
const UserS = new CommentsServices(UserM);
const UserC = new CommentsController(UserS);

router.get('/', UserC.findAll);
router.get('/:id', UserC.findOne);
router.post('/register', UserC.create);
router.put('/edit/:id', UserC.update);
router.delete('/delete/:id', UserC.delete);

export default router;
