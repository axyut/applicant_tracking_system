
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Attendance document
interface IAttendance extends Document {
  userId: mongoose.Types.ObjectId;
  checkIn: Date;
  checkOut?: Date;
  leaves: Date[];
  overtime: number;
}

// Define schema for Attendance model
const AttendanceSchema: Schema<IAttendance> = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  checkIn: { type: Date, required: true },
  checkOut: { type: Date },
  leaves: { type: [Date], default: [] },
  overtime: { type: Number, default: 0 }
}, { timestamps: true });

// Create and export the Attendance model
const Attendance = mongoose.model<IAttendance>('Attendance', AttendanceSchema);
export default Attendance;
