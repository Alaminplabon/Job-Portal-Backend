import { Router } from 'express';
import { jobApplicationController } from './jobApplication.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';

const router = Router();

// Create a job application (protected route)
router.post(
  '/create',
  auth(USER_ROLE.candidate),
  jobApplicationController.createJobApplication,
);

// Update an existing application (optional use case)
// router.patch('/:id', auth(), jobApplicationController);

// Delete a job application (protected route)
router.delete('/:id', jobApplicationController.deleteJobApplication);

// Get a single job application by ID
router.get('/:id', jobApplicationController.getJobApplicationById);

// Get all job applications (e.g., for admin or user view)
router.get('/', jobApplicationController.getAllJobApplications);

export const jobApplicationRoutes = router;
