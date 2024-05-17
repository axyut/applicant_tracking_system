
import { Request, Response } from 'express';
import Role from '../models/Role';
import { NotFoundError, BadRequestError } from '../errors';


// Assign permissions to a role
export const assignPermissionsToRole = async (req: Request, res: Response): Promise<void> => {
  const { roleId } = req.params;
  const { permissionId } = req.body;
  try {
    const role = await Role.findById(roleId);
    if (!role) {
      throw new NotFoundError('Role not found');
    }
    // Add the permissionId to the role's permissions array
    role.permissions.push(permissionId);
    await role.save();
    res.status(200).json(role);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid role ID or permission ID or internal server error');
  }
};

// Remove a permission from a role
export const removePermissionFromRole = async (req: Request, res: Response): Promise<void> => {
  const { roleId, permissionId } = req.params;
  try {
    const role = await Role.findById(roleId);
    if (!role) {
      throw new NotFoundError('Role not found');
    }
    // Remove the permissionId from the role's permissions array
    role.permissions = role.permissions.filter((pId: string) => pId !== permissionId);
    await role.save();
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid role ID or permission ID or internal server error');
  }
};
// Get all roles
export const getAllRoles = async (req: Request, res: Response): Promise<void> => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Create a new role
export const createRole = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const role = new Role(body);
    await role.save();
    res.status(201).json(role);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid role data');
  }
};

// Update an existing role
export const updateRole = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const role = await Role.findByIdAndUpdate(id, body, { new: true });
    if (!role) {
      throw new NotFoundError('Role not found');
    }
    res.status(200).json(role);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid role ID or internal server error');
  }
};

// Delete a role
export const deleteRole = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const role = await Role.findByIdAndDelete(id);
    if (!role) {
      throw new NotFoundError('Role not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid role ID or internal server error');
  }
};
