import asynchandler from "express-async-handler";
import Job from "../models/jobModel";
import User from "../models/userModel";
import { Response } from "express";
import { CustomRequest } from "../middleware/auth";

export const addJob = asynchandler(async (req: CustomRequest, res: Response) => {
    const { title, company, urlAddress, location, workMode, status } = req.body;
    if (!title || !company || !status || !workMode) {
         res.status(403).json({ message: "Both title and company is required to list the job" })
         return;
    }
    const admin: any = await User.findOne({ where: { email: req.user.email } });
    if (!admin) {
         res.status(403).json({ message: "Invalid user, try logging in again after add jobs" })
         return;
    }
    await Job.create({ title, company, urlAddress, location, workMode, status, UserId: admin.id });
    res.status(200).json({ message: "Job listed successfully !" })
});

export const getJobDetails = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    if (!user) {
         res.status(403).json({ message: "Some Invalid error has occured !" });
         return;
    }
    const admin: any = await User.findOne({ where: { email: user } });
    if (!admin) {
         res.status(403).json({ message: "Some Invalid error has occured !" });
         return;
    }
    const jobslist = await Job.findAll({ where: { UserId: admin.id } });
    res.status(200).json(jobslist);
});

export const updateStatus = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    const { id , newstatus } = req.body;
    const admin = await User.findOne({ where: { email: user } });
    if (!admin) {
         res.status(200).json({ message: "some invalid error has occured login in again" });
         return;
    }
    await Job.update(
        { status: newstatus },
        { where: { id: id } }
    );
    res.status(200).json({ message: "job status updated successfully" });
})