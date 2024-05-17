
import express from 'express';
import {
  getAllPermissions,
  createPermission,
  updatePermission,
  deletePermission,
} from '../controllers/permission';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllPermissions);
router.post('/', authenticate, createPermission);
router.put('/:id', authenticate, updatePermission);
router.delete('/:id', authenticate, deletePermission);

export default router;
