import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { jobApplicationService } from './jobApplication.service';

const createJobApplication = catchAsync(async (req: Request, res: Response) => {
  req.body.candidateId = req.user.userId;
  const result = await jobApplicationService.createJobApplication(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Job application submitted successfully',
    data: result,
  });
});

const getAllJobApplications = catchAsync(
  async (req: Request, res: Response) => {
    const result = await jobApplicationService.getAllJobApplications(req.query);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Job applications fetched successfully',
      data: result,
    });
  },
);

const getJobApplicationById = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await jobApplicationService.getJobApplicationById(id);
    sendResponse(res, {
      statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
      success: Boolean(result),
      message: result
        ? 'Job application fetched successfully'
        : 'Job application not found',
      data: result,
    });
  },
);

const deleteJobApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await jobApplicationService.deleteJobApplication(id);
  sendResponse(res, {
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    success: Boolean(result),
    message: result
      ? 'Job application deleted successfully'
      : 'Job application not found',
    data: result,
  });
});

export const jobApplicationController = {
  createJobApplication,
  getAllJobApplications,
  getJobApplicationById,
  deleteJobApplication,
};
