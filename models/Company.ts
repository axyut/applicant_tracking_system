
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Social Media Links
interface ISocialMediaLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

// Define interface for Company document
interface ICompany extends Document {
  name: string;
  logos?: Buffer[]; // Array of Buffers for the logos
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  description?: string;
  socialMediaLinks?: ISocialMediaLinks;
  privacyPolicies?: Buffer[]; // Array of Buffers for the privacy policy documents
  termsConditions?: Buffer[]; // Array of Buffers for the terms and conditions documents
  agreements?: Buffer[]; // Array of Buffers for the agreement documents
}

// Define schema for Company model
const CompanySchema: Schema<ICompany> = new Schema({
  name: { type: String, required: true, trim: true, maxLength: 100 },
  logos: { type: [Buffer] },
  address: { type: String, trim: true, maxLength: 255 },
  phone: { type: String, trim: true, maxLength: 20 },
  email: { type: String, trim: true, maxLength: 100 },
  website: { type: String, trim: true, maxLength: 100 },
  description: { type: String, trim: true, maxLength: 500 },
  socialMediaLinks: {
    facebook: { type: String, trim: true, maxLength: 100 },
    twitter: { type: String, trim: true, maxLength: 100 },
    linkedin: { type: String, trim: true, maxLength: 100 }
  },
  privacyPolicies: { type: [Buffer] },
  termsConditions: { type: [Buffer] },
  agreements: { type: [Buffer] }
}, { timestamps: true });

// Create and export the Company model
const Company = mongoose.model<ICompany>('Company', CompanySchema);
export default Company;
