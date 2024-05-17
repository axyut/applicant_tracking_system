
import { Request, Response } from 'express';
import Admin from '../models/Admin';
import { NotFoundError, BadRequestError } from '../errors';

// Get admin profile details
export const getAdminProfile = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const admin = await Admin.findById(id);
    if (!admin) {
      throw new NotFoundError('Admin profile not found');
    }
    res.status(200).json(admin);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid admin ID or internal server error');
  }
};

// Update admin profile
export const updateAdminProfile = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const admin = await Admin.findByIdAndUpdate(id, body, { new: true });
    if (!admin) {
      throw new NotFoundError('Admin profile not found');
    }
    res.status(200).json(admin);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid admin ID or internal server error');
  }
};
