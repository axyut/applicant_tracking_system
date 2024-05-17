
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Project document
interface IProject extends Document {
  projectName: string;
  projectDescription: string;
  assignedTeam: mongoose.Types.ObjectId;
  assignedGoals: mongoose.Types.ObjectId[];
}

// Define schema for Project model
const ProjectSchema: Schema<IProject> = new Schema({
  projectName: { type: String, required: true, trim: true, maxLength: 100 },
  projectDescription: { type: String, required: true },
  assignedTeam: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Team" },
  assignedGoals: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Goal" }], default: [] }
}, { timestamps: true });

// Create and export the Project model
const Project = mongoose.model<IProject>('Project', ProjectSchema);
export default Project;
