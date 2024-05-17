
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Role document
interface IRole extends Document {
  roleName: string;
  permissions: string[];
}

// Define schema for Role model
const RoleSchema: Schema<IRole> = new Schema({
  roleName: { type: String, required: true, trim: true, maxLength: 100 },
  permissions: { type: [String], default: [] }
}, { timestamps: true });

// Create and export the Role model
const Role = mongoose.model<IRole>('Role', RoleSchema);
export default Role;
