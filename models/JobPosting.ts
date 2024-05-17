
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for JobPosting document
interface IJobPosting extends Document {
  companyName: string;
  companyLogo: string;
  jobTitle: string;
  jobDescription: string;
  jobRequirements: string;
  jobRolesResponsibilities: string;
  jobLocation: string;
  jobType: string;
  jobSalaryRange: string;
  jobBenefits: string;
  expectedJobStartDate: Date;
  expectedJobEndDate?: Date;
  numberOfOpenings: number;
  expectedRounds: string[];
  jobApplicationDeadline: Date;
  agreementPrivacyPolicy: string;
}

// Define schema for JobPosting model
const JobPostingSchema: Schema<IJobPosting> = new Schema({
  companyName: { type: String, required: true, trim: true, maxLength: 100 },
  companyLogo: { type: String, required: true },
  jobTitle: { type: String, required: true, trim: true, maxLength: 100 },
  jobDescription: { type: String, required: true },
  jobRequirements: { type: String, required: true },
  jobRolesResponsibilities: { type: String, required: true },
  jobLocation: { type: String, required: true, trim: true, maxLength: 100 },
  jobType: { type: String, required: true, trim: true, maxLength: 50 },
  jobSalaryRange: { type: String, required: true, trim: true, maxLength: 100 },
  jobBenefits: { type: String, required: true },
  expectedJobStartDate: { type: Date, required: true },
  expectedJobEndDate: { type: Date },
  numberOfOpenings: { type: Number, required: true },
  expectedRounds: { type: [String], required: true },
  jobApplicationDeadline: { type: Date, required: true },
  agreementPrivacyPolicy: { type: String, required: true }
}, { timestamps: true });

// Create and export the JobPosting model
const JobPosting = mongoose.model<IJobPosting>('JobPosting', JobPostingSchema);
export default JobPosting;
