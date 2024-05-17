
import express from 'express';
import {
  getAllRoles,
  createRole,
  updateRole,
  deleteRole,
  assignPermissionsToRole,
  removePermissionFromRole,
} from '../controllers/role';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllRoles);
router.post('/', authenticate, createRole);
router.put('/:id', authenticate, updateRole);
router.delete('/:id', authenticate, deleteRole);
router.put('/:roleId/permissions', authenticate, assignPermissionsToRole);
router.delete('/:roleId/permissions/:permissionId', authenticate, removePermissionFromRole);

export default router;
