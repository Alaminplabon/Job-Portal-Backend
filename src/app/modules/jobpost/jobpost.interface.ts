import { Types } from 'mongoose';

export interface IJob {
  _id: Types.ObjectId;
  title: string;
  description: string;
  companyName: string;
  location: string;
  jobType: 'full-time' | 'part-time' | 'contract' | 'internship';
  salaryRange?: {
    min: number;
    max: number;
  };
  skills?: string[];
  userId: Types.ObjectId;
  jobStatus: 'Active' | 'Inactive';
}
