
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Team document
interface ITeam extends Document {
  teamName: string;
  members: mongoose.Types.ObjectId[];
}

// Define schema for Team model
const TeamSchema: Schema<ITeam> = new Schema({
  teamName: { type: String, required: true, trim: true, maxLength: 100 },
  members: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Admin" }], default: [] }
}, { timestamps: true });

// Create and export the Team model
const Team = mongoose.model<ITeam>('Team', TeamSchema);
export default Team;
