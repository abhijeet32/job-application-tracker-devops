import asynchandler from "express-async-handler";
import Contact from "../models/contactModel";
import User from "../models/userModel";
import { Response } from "express";
import { CustomRequest } from "../middleware/auth";

export const saveContact = asynchandler(async (req: CustomRequest, res: Response) => {
    const { name, jobtitle, companies, location, email, phonenumber, media } = req.body;
    if (!name || !email || !phonenumber) {
        res.status(203).json({ message: "please add required details" });
        return;
    }
    const issaved = await Contact.findOne({ where: { name, email } });
    if (issaved) {
        res.status(203).json({ message: "Details are already added" });
        return;
    }
    const admin: any = await User.findOne({ where: { email: req.user.email } });
    if (!admin) {
        res.status(203).json({ message: "try loging in again, some invalid error has occured" });
        return;
    }
    await Contact.create({ name, jobtitle, companies, location, email, phonenumber, media, UserId: admin.id });
    res.status(200).json({ message: "contact details added successfully" });
});

export const getContact = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    const admin: any = await User.findOne({ where: { email: user } });
    if (!admin) {
        res.status(302).json({ message: "login again some invalid error has occured" });
        return;
    }
    const data = await Contact.findAll({ where: { UserId: admin.id } });
    res.status(200).json(data);
});

export const updateContact = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    const { contactid } = req.params;
    const { name, jobtitle, companies, location, email, phonenumber, media } = req.body;
    const admin = await User.findOne({ where: { email: user } });
    if (!admin) {
        res.status(203).json({ message: "some invalid error has occured try to login in again" });
        return;
    }
    await Contact.update(
        { name, jobtitle, companies, location, email, phonenumber, media },
        { where: { id: contactid } }
    );
    res.status(200).json({ message: "contact details updated succesfully" });
});

export const deleteContact = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    const { contactid } = req.params;
    const admin = await User.findOne({ where: { email: user } });
    if (!admin) {
        res.status(203).json({ message: "some invalid error has occured try to login in again" });
        return;
    }
    await Contact.destroy({ where: { id: contactid } });
    res.status(200).json({ message: "contact details deleted successfully" });
});
