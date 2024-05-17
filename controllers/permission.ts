
import { Request, Response } from 'express';
import Permission from '../models/Permission';
import { NotFoundError, BadRequestError } from '../errors';

// Get all permissions
export const getAllPermissions = async (req: Request, res: Response): Promise<void> => {
  try {
    const permissions = await Permission.find();
    res.status(200).json(permissions);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Create a new permission
export const createPermission = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const permission = new Permission(body);
    await permission.save();
    res.status(201).json(permission);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid permission data');
  }
};

// Update an existing permission
export const updatePermission = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const permission = await Permission.findByIdAndUpdate(id, body, { new: true });
    if (!permission) {
      throw new NotFoundError('Permission not found');
    }
    res.status(200).json(permission);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid permission ID or internal server error');
  }
};

// Delete a permission
export const deletePermission = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const permission = await Permission.findByIdAndDelete(id);
    if (!permission) {
      throw new NotFoundError('Permission not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid permission ID or internal server error');
  }
};
