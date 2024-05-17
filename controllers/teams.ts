
import { Request, Response } from 'express';
import Team from '../models/Team';
import { NotFoundError, BadRequestError } from '../errors';

// Get all teams
export const getAllTeams = async (req: Request, res: Response): Promise<void> => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Internal server error');
  }
};

// Create a new team
export const createTeam = async (req: Request, res: Response): Promise<void> => {
  const { body } = req;
  try {
    const team = new Team(body);
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid team data');
  }
};

// Update an existing team
export const updateTeam = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { body } = req;
  try {
    const team = await Team.findByIdAndUpdate(id, body, { new: true });
    if (!team) {
      throw new NotFoundError('Team not found');
    }
    res.status(200).json(team);
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid team ID or internal server error');
  }
};

// Delete a team
export const deleteTeam = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const team = await Team.findByIdAndDelete(id);
    if (!team) {
      throw new NotFoundError('Team not found');
    }
    res.status(204).end();
  } catch (error) {
    console.log(error);
    throw new BadRequestError('Invalid team ID or internal server error');
  }
};
