import { Types } from 'mongoose';

export interface IJobApplication {
  _id?: Types.ObjectId;
  jobId: Types.ObjectId;
  candidateId: Types.ObjectId;
  coverLetter?: string;
  resume?: string;
  appliedAt?: Date;
}
