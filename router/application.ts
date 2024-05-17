
import express from 'express';
import {
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
} from '../controllers/application';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllApplications);
router.get('/:id', authenticate, getApplicationById);
router.put('/:id/status', authenticate, updateApplicationStatus);

export default router;
