
import { Request, Response } from 'express';
import Payment from '../models/Payment';
import { NotFoundError, BadRequestError } from '../errors';

// Get payment details
export const getPaymentDetails = async (req: Request, res: Response): Promise<void> => {
  try {
    const payments = await Payment.find();
    res.status(200).json(payments);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Make a payment
export const makePayment = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const payment = new Payment(body);
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid payment data');
  }
};

// Update payment details
export const updatePaymentDetails = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const payment = await Payment.findByIdAndUpdate(id, body, { new: true });
    if (!payment) {
      throw new NotFoundError('Payment not found');
    }
    res.status(200).json(payment);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid payment ID or internal server error');
  }
};

// Cancel a payment
export const cancelPayment = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const payment = await Payment.findByIdAndDelete(id);
    if (!payment) {
      throw new NotFoundError('Payment not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid payment ID or internal server error');
  }
};
