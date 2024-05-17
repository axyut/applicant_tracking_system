
import express from 'express';
import {
  getPaymentDetails,
  makePayment,
  updatePaymentDetails,
  cancelPayment,
} from '../controllers/payment';
import { authenticate } from '../middleware/authenticate';

const router = express.Router();

router.get('/', authenticate, getPaymentDetails);
router.post('/', authenticate, makePayment);
router.put('/:id', authenticate, updatePaymentDetails);
router.delete('/:id', authenticate, cancelPayment);

export default router;
