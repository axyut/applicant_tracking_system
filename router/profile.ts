
import express from 'express';
import {
  getAdminProfile,
  updateAdminProfile
} from '../controllers/admin'
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/:id', authenticate, getAdminProfile);
router.put('/:id', authenticate, updateAdminProfile);

export default router;
