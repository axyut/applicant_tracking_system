
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Application document
interface IApplication extends Document {
  applicantId: mongoose.Types.ObjectId;
  jobId: mongoose.Types.ObjectId;
  status: string;
  rounds: string[];
}

// Define schema for Application model
const ApplicationSchema: Schema<IApplication> = new Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobPosting', required: true },
  status: { type: String, required: true, trim: true, maxLength: 100 },
  rounds: { type: [String], default: [] }
}, { timestamps: true });

// Create and export the Application model
const Application = mongoose.model<IApplication>('Application', ApplicationSchema);
export default Application;
