
import { Request, Response } from 'express';
import Project from '../models/Project';
import { NotFoundError, BadRequestError } from '../errors';

// Get all projects
export const getAllProjects = async (req: Request, res: Response): Promise<void> => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Create a new project
export const createProject = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const project = new Project(body);
    await project.save();
    res.status(201).json(project);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid project data');
  }
};

// Update an existing project
export const updateProject = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const project = await Project.findByIdAndUpdate(id, body, { new: true });
    if (!project) {
      throw new NotFoundError('Project not found');
    }
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid project ID or internal server error');
  }
};

// Delete a project
export const deleteProject = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      throw new NotFoundError('Project not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid project ID or internal server error');
  }
};
