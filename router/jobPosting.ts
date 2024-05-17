
import express from 'express';
import {
  getAllJobPostings,
  createJobPosting,
  updateJobPosting,
  deleteJobPosting,
} from '../controllers/jobPosting';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getAllJobPostings);
router.post('/', authenticate, createJobPosting);
router.put('/:id', authenticate, updateJobPosting);
router.delete('/:id', authenticate, deleteJobPosting);

export default router;
