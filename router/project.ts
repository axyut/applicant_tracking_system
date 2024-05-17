
import express from 'express';
import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/project';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllProjects);
router.post('/', authenticate, createProject);
router.put('/:id', authenticate, updateProject);
router.delete('/:id', authenticate, deleteProject);

export default router;
