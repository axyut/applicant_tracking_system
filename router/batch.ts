
import express from 'express';
import {
  getAllBatches,
  createBatch,
  updateBatch,
  deleteBatch,
  setCurrentBatch,
} from '../controllers/batch';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllBatches);
router.post('/', authenticate, createBatch);
router.put('/:id', authenticate, updateBatch);
router.delete('/:id', authenticate, deleteBatch);
router.put('/:id/current', authenticate, setCurrentBatch);

export default router;
