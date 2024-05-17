
import { Request, Response } from 'express';
import JobPosting from '../models/JobPosting';
import { NotFoundError, BadRequestError } from '../errors';

// View all job postings
export const getAllJobPostings = async (req: Request, res: Response): Promise<void> => {
  try {
    const jobPostings = await JobPosting.find();
    res.status(200).json(jobPostings);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Create a new job posting
export const createJobPosting = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const jobPosting = new JobPosting(body);
    await jobPosting.save();
    res.status(201).json(jobPosting);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid job posting data');
  }
};

// Update an existing job posting
export const updateJobPosting = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const jobPosting = await JobPosting.findByIdAndUpdate(id, body, { new: true });
    if (!jobPosting) {
      throw new NotFoundError('Job posting not found');
    }
    res.status(200).json(jobPosting);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid job posting ID or internal server error');
  }
};

// Delete a job posting
export const deleteJobPosting = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const jobPosting = await JobPosting.findByIdAndDelete(id);
    if (!jobPosting) {
      throw new NotFoundError('Job posting not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid job posting ID or internal server error');
  }
};
