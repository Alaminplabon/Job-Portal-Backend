import QueryBuilder from '../../builder/QueryBuilder';
import { Job } from '../jobpost/jobpost.models';
import { modeType } from '../notification/notification.interface';
import { notificationServices } from '../notification/notification.service';
import { IJobApplication } from './jobApplication.interface';
import { JobApplication } from './jobApplication.models';

const createJobApplication = async (
  payload: IJobApplication,
): Promise<IJobApplication> => {
  const result = await JobApplication.create(payload);
  const job = await Job.findById(payload.jobId);

  if (job) {
    await notificationServices.insertNotificationIntoDb({
      receiver: job.userId.toString(), // employer
      message: 'New Job Application Received',
      description: `You have a new application for the job titled "${job.title}".`,
      refference: result._id, // reference to the job application
      model_type: modeType.JobApplication,
    });
  }
  return result;
};

const getAllJobApplications = async (
  query: Record<string, any>,
): Promise<{ data: IJobApplication[]; meta: { total: number } }> => {
  const applicationQuery = new QueryBuilder(JobApplication.find(), query)
    .search(['coverLetter']) // Adjust fields to be searchable
    .filter()
    .paginate()
    .sort();

  const data = await applicationQuery.modelQuery;
  const meta = await applicationQuery.countTotal();
  return { data, meta };
};

const getJobApplicationById = async (
  id: string,
): Promise<IJobApplication | null> => {
  return await JobApplication.findById(id);
};

const deleteJobApplication = async (
  id: string,
): Promise<IJobApplication | null> => {
  return await JobApplication.findByIdAndDelete(id);
};

export const jobApplicationService = {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  deleteJobApplication,
};
