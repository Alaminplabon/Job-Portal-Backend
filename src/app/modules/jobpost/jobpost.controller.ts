import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { jobpostService } from './jobpost.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const createjobpost = catchAsync(async (req: Request, res: Response) => {
  req.body.userId = req.user.userId;
  const result = await jobpostService.createjobpost(req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Job post created successfully',
    data: result,
  });
});

const getAlljobpost = catchAsync(async (req: Request, res: Response) => {
  const result = await jobpostService.getAlljobpost(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Job posts fetched successfully',
    data: result,
  });
});

const getjobpostById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await jobpostService.getjobpostById(id);
  sendResponse(res, {
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    success: Boolean(result),
    message: result ? 'Job post fetched successfully' : 'Job post not found',
    data: result,
  });
});

const updatejobpost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await jobpostService.updatejobpost(id, req.body);
  sendResponse(res, {
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    success: Boolean(result),
    message: result ? 'Job post updated successfully' : 'Job post not found',
    data: result,
  });
});

const deletejobpost = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await jobpostService.deletejobpost(id);
  sendResponse(res, {
    statusCode: result ? httpStatus.OK : httpStatus.NOT_FOUND,
    success: Boolean(result),
    message: result ? 'Job post deleted successfully' : 'Job post not found',
    data: result,
  });
});

export const jobpostController = {
  createjobpost,
  getAlljobpost,
  getjobpostById,
  updatejobpost,
  deletejobpost,
};
