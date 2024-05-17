
import { Request, Response } from 'express';
import Batch from '../models/Batch';
import { NotFoundError, BadRequestError } from '../errors';

// Get all batches
export const getAllBatches = async (req: Request, res: Response): Promise<void> => {
  try {
    const batches = await Batch.find();
    res.status(200).json(batches);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Create a new batch
export const createBatch = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const batch = new Batch(body);
    await batch.save();
    res.status(201).json(batch);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid batch data');
  }
};

// Update an existing batch
export const updateBatch = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const batch = await Batch.findByIdAndUpdate(id, body, { new: true });
    if (!batch) {
      throw new NotFoundError('Batch not found');
    }
    res.status(200).json(batch);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid batch ID or internal server error');
  }
};

// Delete a batch
export const deleteBatch = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const batch = await Batch.findByIdAndDelete(id);
    if (!batch) {
      throw new NotFoundError('Batch not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid batch ID or internal server error');
  }
};

// Set a batch as the current batch
export const setCurrentBatch = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const batch = await Batch.findByIdAndUpdate(id, { current: true });
    if (!batch) {
      throw new NotFoundError('Batch not found');
    }
    res.status(200).json(batch);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid batch ID or internal server error');
  }
};
