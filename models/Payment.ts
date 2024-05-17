
import mongoose, { Schema, Document } from "mongoose";

// Define interface for Payment document
interface IPayment extends Document {
    user: mongoose.Schema.Types.ObjectId;
    totalSalary: number;
    bonus: number;
    deductions: number;
    paymentStatus: string;
    nextPaymentDate: Date;
}

// Define schema for Payment model
const PaymentSchema: Schema<IPayment> = new Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, required: true, ref:"User" },
        totalSalary: { type: Number, required: true },
        bonus: { type: Number, required: true },
        deductions: { type: Number, required: true },
        paymentStatus: {
            type: String,
            required: true,
            trim: true,
            maxLength: 50,
        },
        nextPaymentDate: { type: Date, required: true },
    },
    { timestamps: true }
);

// Create and export the Payment model
const Payment = mongoose.model<IPayment>("Payment", PaymentSchema);
export default Payment;
