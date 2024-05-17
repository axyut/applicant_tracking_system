
import express from 'express';
import {
  getAllGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goals';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllGoals);
router.post('/', authenticate, createGoal);
router.put('/:id', authenticate, updateGoal);
router.delete('/:id', authenticate, deleteGoal);

export default router;
