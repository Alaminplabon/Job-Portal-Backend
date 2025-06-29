import { Schema, model } from 'mongoose';
import { IJob } from './jobpost.interface';

const jobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'contract', 'internship'],
      required: true,
    },
    salaryRange: {
      min: { type: Number },
      max: { type: Number },
    },
    skills: [{ type: String }],
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    jobStatus: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
  },
  {
    timestamps: true,
  },
);

export const Job = model<IJob>('Job', jobSchema);
