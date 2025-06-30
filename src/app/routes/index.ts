import { Router } from 'express';
import { otpRoutes } from '../modules/otp/otp.routes';
import { userRoutes } from '../modules/user/user.route';
import { authRoutes } from '../modules/auth/auth.route';
import { notificationRoutes } from '../modules/notification/notificaiton.route';
import { jobpostRoutes } from '../modules/jobpost/jobpost.route';
import { jobApplicationRoutes } from '../modules/jobApplication/jobApplication.route';

const router = Router();
const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/otp',
    route: otpRoutes,
  },
  {
    path: '/notifications',
    route: notificationRoutes,
  },
  {
    path: '/jobposts',
    route: jobpostRoutes,
  },
  {
    path: '/jobapplications',
    route: jobApplicationRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
