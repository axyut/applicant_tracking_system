
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Batch document
interface IBatch extends Document {
  batchName: string;
  startDate: Date;
  endDate: Date;
}

// Define schema for Batch model
const BatchSchema: Schema<IBatch> = new Schema({
  batchName: { type: String, required: true, trim: true, maxLength: 100 },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
}, { timestamps: true });

// Create and export the Batch model
const Batch = mongoose.model<IBatch>('Batch', BatchSchema);
export default Batch;
