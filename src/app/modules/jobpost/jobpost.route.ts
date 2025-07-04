import { Router } from 'express';
import { jobpostController } from './jobpost.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constants';

const router = Router();

router.post(
  '/create',
  auth(USER_ROLE.employer),
  jobpostController.createjobpost,
);

router.patch(
  '/update/:id',
  auth(USER_ROLE.employer),
  jobpostController.updatejobpost,
);

router.delete(
  '/:id',
  auth(USER_ROLE.employer),
  jobpostController.deletejobpost,
);

router.get('/:id', jobpostController.getjobpostById);
router.get('/', jobpostController.getAlljobpost);

export const jobpostRoutes = router;
