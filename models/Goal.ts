
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Goal document
interface IGoal extends Document {
  goalName: string;
  goalDescription: string;
  assignedProject: mongoose.Types.ObjectId;
}

// Define schema for Goal model
const GoalSchema: Schema<IGoal> = new Schema({
  goalName: { type: String, required: true, trim: true, maxLength: 100 },
  goalDescription: { type: String, required: true },
  assignedProject: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Project" }
}, { timestamps: true });

// Create and export the Goal model
const Goal = mongoose.model<IGoal>('Goal', GoalSchema);
export default Goal;
