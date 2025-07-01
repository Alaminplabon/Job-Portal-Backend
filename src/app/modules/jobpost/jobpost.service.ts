import QueryBuilder from '../../builder/QueryBuilder';
import { IJob } from './jobpost.interface';
import { Job } from './jobpost.models';

const createjobpost = async (payload: IJob): Promise<IJob> => {
  const result = await Job.create(payload);
  return result;
};

const getAlljobpost = async (
  query: Record<string, any>,
): Promise<{ data: IJob[]; meta: { total: number } }> => {
  const jobModel = new QueryBuilder(Job.find(), query)
    .search(['title', 'location'])
    .filter()
    .paginate()
    .sort();

  const data = await jobModel.modelQuery;
  const meta = await jobModel.countTotal();
  return { data, meta };
};

const getjobpostById = async (id: string): Promise<IJob | null> => {
  const job = await Job.findById(id);
  return job;
};

const updatejobpost = async (
  id: string,
  payload: Partial<IJob>,
): Promise<IJob | null> => {
  const updatedJob = await Job.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return updatedJob;
};

const deletejobpost = async (id: string): Promise<IJob | null> => {
  const deleted = await Job.findByIdAndDelete(id);
  return deleted;
};

export const jobpostService = {
  createjobpost,
  getAlljobpost,
  getjobpostById,
  updatejobpost,
  deletejobpost,
};
