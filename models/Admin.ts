import mongoose, { Schema, Document } from "mongoose";

// Define interface for Admin document
interface IAdmin extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
}

// Define schema for Admin model
const AdminSchema: Schema<IAdmin> = new Schema(
    {
        username: { type: String, required: true, trim: true, maxLength: 100 },
        email: { type: String, required: true, trim: true, maxLength: 100 },
        password: { type: String, required: true, trim: true, maxLength: 100 },
        role: { type: String, required: true, trim: true, maxLength: 50 },
    },
    { timestamps: true }
);

// Create and export the Admin model
const Admin = mongoose.model<IAdmin>("Admin", AdminSchema);
export default Admin;
