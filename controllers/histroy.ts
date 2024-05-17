
import { Request, Response } from 'express';
import User from '../models/User';
import Application from '../models/Application';
import Project from '../models/Project';
import { BadRequestError } from '../errors';

// Get application history
export const getApplicationHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    // Query applications with necessary fields
    const applications = await Application.find().populate('userId', 'name email');
    res.status(200).json(applications);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Get project history
export const getProjectHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    // Query projects with necessary fields
    const projects = await Project.find().populate('userId', 'name email');
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Get employee history
export const getEmployeeHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    // Query users with necessary fields
    const users = await User.find({}, 'name email role'); // Assuming 'role' is a relevant field
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};
