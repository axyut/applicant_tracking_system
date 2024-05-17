
import mongoose, { Schema, Document } from 'mongoose';

// Define interface for Message document
interface IMessage extends Document {
  senderId: mongoose.Types.ObjectId;
  receiverId: mongoose.Types.ObjectId;
  message: string;
}

// Define schema for Message model
const MessageSchema: Schema<IMessage> = new Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

// Create and export the Message model
const Message = mongoose.model<IMessage>('Message', MessageSchema);
export default Message;

