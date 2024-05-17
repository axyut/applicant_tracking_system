
import { Request, Response } from 'express';
import Goal from '../models/Goal';
import { NotFoundError, BadRequestError } from '../errors';

// Get all goals
export const getAllGoals = async (req: Request, res: Response): Promise<void> => {
  try {
    const goals = await Goal.find();
    res.status(200).json(goals);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Create a new goal
export const createGoal = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const goal = new Goal(body);
    await goal.save();
    res.status(201).json(goal);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid goal data');
  }
};

// Update an existing goal
export const updateGoal = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const goal = await Goal.findByIdAndUpdate(id, body, { new: true });
    if (!goal) {
      throw new NotFoundError('Goal not found');
    }
    res.status(200).json(goal);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid goal ID or internal server error');
  }
};

// Delete a goal
export const deleteGoal = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const goal = await Goal.findByIdAndDelete(id);
    if (!goal) {
      throw new NotFoundError('Goal not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid goal ID or internal server error');
  }
};
