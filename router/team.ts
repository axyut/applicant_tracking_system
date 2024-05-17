
import express from 'express';
import {
  getAllTeams,
  createTeam,
  updateTeam,
  deleteTeam,
} from '../controllers/teams';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllTeams);
router.post('/', authenticate, createTeam);
router.put('/:id', authenticate, updateTeam);
router.delete('/:id', authenticate, deleteTeam);

export default router;
