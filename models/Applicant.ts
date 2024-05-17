import mongoose, { Schema, Document } from "mongoose";

// Define interface for Applicant document
interface IApplicant extends Document {
    name: string;
    email: string;
    phone?: string;
    resume: string;
    otherDocuments?: string[];
    currentJobStatus: string;
    positionAppliedFor: string;
    roleAppliedFor: string;
    proficiency: string;
    experience: string;
    availability: {
        startDate: Date;
        availableHours: string;
        availableLocations: string[];
    };
    messageToEmployer?: string;
    referralSource?: string;
    captchaToken: string;
    applicationStatus: string;
}

// Define schema for Applicant model
const ApplicantSchema: Schema<IApplicant> = new Schema(
    {
        name: { type: String, required: true, trim: true, maxLength: 100 },
        email: { type: String, required: true, trim: true, maxLength: 100 },
        phone: { type: String, trim: true, maxLength: 20 },
        resume: { type: String, required: true },
        otherDocuments: { type: [String], default: [], maxLength: 100 },
        currentJobStatus: { type: String, required: true },
        positionAppliedFor: {
            type: String,
            required: true,
            trim: true,
            maxLength: 100,
        },
        roleAppliedFor: {
            type: String,
            required: true,
            trim: true,
            maxLength: 100,
        },
        proficiency: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50,
        },
        experience: { type: String, required: true, trim: true, maxLength: 50 },
        availability: {
            startDate: { type: Date, required: true },
            availableHours: {
                type: String,
                required: true,
                trim: true,
                maxLength: 50,
            },
            availableLocations: { type: [String], default: [], maxLength: 100 },
        },
        messageToEmployer: { type: String, trim: true, maxLength: 500 },
        referralSource: { type: String, trim: true, maxLength: 100 },
        captchaToken: { type: String, required: true },
        applicationStatus: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50,
        },
    },
    { timestamps: true }
);

// Create and export the Applicant model
const Applicant = mongoose.model<IApplicant>("Applicant", ApplicantSchema);
export default Applicant;
