import express from "express";
const router = express.Router();

import authRouter from './auth';
import userRouter from './user';
import applicationRouter from './application';
import jobPostingRouter from './jobPosting';
import profileRouter from './profile';
import paymentRouter from './payment';
import projectRouter from './project';
import teamRouter from './team';
import goalRouter from './goal';
import batchRouter from './batch';
import roleRouter from './role';
import permissionRouter from './permission';
import historyRouter from './history';

router.use('/api/auth', authRouter);
router.use('/api/user', userRouter);
router.use('/api/applications', applicationRouter);
router.use('/api/job-postings', jobPostingRouter);
router.use('/api/profiles', profileRouter);
router.use('/api/payments', paymentRouter);
router.use('/api/projects', projectRouter);
router.use('/api/teams', teamRouter);
router.use('/api/goals', goalRouter);
router.use('/api/batches', batchRouter);
router.use('/api/roles', roleRouter);
router.use('/api/permissions', permissionRouter);
router.use('/api/history', historyRouter);

// APIs
router.get("/api", (req, res) => {
  res.json({
    msg: "Welcome",
    routes: {
      server: "/",
      client: "http://127.0.0.1:5000/",
      api: {
        auth: {
          register: {
            method: "POST",
            path: "/api/auth/register",
          },
          login: {
            method: "POST",
            path: "/api/auth/login",
          },
        },
      },
    },
  });
});

export default router;
