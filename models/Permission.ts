port mongoose, { Schema, Document } from 'mongoose';

// Define interface for Permission document
interface IPermission extends Document {
  permissionName: string;
  description: string;
}

// Define schema for Permission model
const PermissionSchema: Schema<IPermission> = new Schema({
  permissionName: { type: String, required: true, trim: true, maxLength: 100 },
  description: { type: String, required: true }
}, { timestamps: true });

// Create and export the Permission model
const Permission = mongoose.model<IPermission>('Permission', PermissionSchema);
export default Permission;
