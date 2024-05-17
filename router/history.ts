
import express from 'express';
import {
  getApplicationHistory,
  getProjectHistory,
  getEmployeeHistory,
} from '../controllers/histroy';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/applications', authenticate, getApplicationHistory);
router.get('/projects', authenticate, getProjectHistory);
router.get('/employees', authenticate, getEmployeeHistory);

export default router;
