import { Schema, model } from 'mongoose';
import { IJobApplication } from './jobApplication.interface';

const jobApplicationSchema = new Schema<IJobApplication>(
  {
    jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
    candidateId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    coverLetter: { type: String },
    resume: { type: String },
    appliedAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  },
);

export const JobApplication = model<IJobApplication>(
  'JobApplication',
  jobApplicationSchema,
);
