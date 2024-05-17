
import { Request, Response } from 'express';
import Application from '../models/Application';
import { NotFoundError, BadRequestError } from '../errors';

// View all applications
export const getAllApplications = async (req: Request, res: Response): Promise<void> => {
  try {
    const applications = await Application.find();
    res.status(200).json(applications);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// View details of a specific application
export const getApplicationById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const application = await Application.findById(id);
    if (!application) {
      throw new NotFoundError('Application not found');
    }
    res.status(200).json(application);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid application ID or application not found');
  }
};

// Update application status
export const updateApplicationStatus = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const application = await Application.findByIdAndUpdate(id, { status }, { new: true });
    if (!application) {
      throw new NotFoundError('Application not found');
    }
    res.status(200).json(application);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid application ID or internal server error');
  }
};
