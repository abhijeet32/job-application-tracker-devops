import express from 'express';
import authenticationJwt from "../middleware/auth";
import { addJob, getJobDetails, updateStatus } from "../controllers/JobController";

const router = express.Router();

router.post('/addjob', authenticationJwt, addJob);
router.get('/getjobdetails', authenticationJwt, getJobDetails);
router.put("/updatestatus", authenticationJwt, updateStatus);

export default router;
