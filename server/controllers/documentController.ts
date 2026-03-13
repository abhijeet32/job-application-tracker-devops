import asynchandler from "express-async-handler";
import fs from "fs";
import uploadOnCloudinary from "../utils/Cloudinary";
import Document from "../models/documentModel";
import User from "../models/userModel";
import Filedata from "../models/fileModel";
import { Response, NextFunction } from "express";
import { CustomRequest } from "../middleware/auth";

export const uploadDocument = async function (req: CustomRequest, res: Response, next: NextFunction) {
    try {
        if (!req.file) {
             res.status(500).json({ message: "file not uploaded" });
             return;
        }

        const localPathFile = req.file.path;
        const uploadfile: any = await uploadOnCloudinary(localPathFile);
        
        if (!uploadfile || !uploadfile.url) {
             res.status(500).json({ message: "Error uploading file to cloud" });
             return;
        }

        const docurl = uploadfile.secure_url;
        const admin: any = await User.findOne({ where: { email: req.user.email } });
        if (!admin) {
             res.status(403).json({ message: "Invalid user, try logging in again" });
             return;
        }

        await Filedata.create({ filename: docurl, UserId: admin.id });

        fs.unlink(localPathFile, (err) => {
            if (err) {
                console.error("error deleting temp file:", err);
            } else {
                console.log("temporary file deleted:", localPathFile);
            }
        });

        res.status(200).json({ message: "file uploaded successfully!", uploadfile });
    } catch (error) {
        console.log("some error has occured", error);
        res.status(500).json({ error: "file upload has failed" });
    }
}

export const getFile = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    if (!user) {
         res.status(403).json({ message: "Invalid user, try logging in again" });
         return;
    }
    const admin: any = await User.findOne({ where: { email: user } });
    if (!admin) {
         res.status(403).json({ message: "Invalid user, try logging in again" });
         return;
    }
    const Docdata = await Filedata.findAll({ where: { UserId: admin.id } });
    res.status(200).send(Docdata);
});

export const writeDocument = asynchandler(async (req: CustomRequest, res: Response) => {
    const { title, description, category } = req.body;
    if (!title || !description || !category) {
         res.status(203).json({ message: "please write something" });
         return;
    }
    const user = req.user.email;
    if (!user) {
         res.status(203).json({ message: "Invalid error occured !" });
         return;
    }
    const admin: any = await User.findOne({ where: { email: user } });
    if (!admin) {
         res.status(303).json({ message: "some invalid error has occured" });
         return;
    }
    await Document.create({ title, description, category, UserId: admin.id });
    res.status(200).json({ message: "successfullys submited document" });
});

export const getDocument = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    const admin: any = await User.findOne({ where: { email: user } });
    if (!admin) {
         res.status(203).json({ message: "some invalid error has occured try or login in again" });
         return;
    }
    const docdata = await Document.findAll({ where: { UserId: admin.id } });
    res.status(200).json(docdata);
});

export const updateDocument = asynchandler(async (req: CustomRequest, res: Response) => {
    const user = req.user.email;
    const { docid } = req.params;
    const { title, description, category } = req.body;
    const admin = await User.findOne({ where: { email: user } });
    if (!admin) {
         res.status(203).json({ message: "some invalid error has occured !" });
         return;
    }
    await Document.update(
        { title, description, category },
        { where: { id: docid } }
    );
    res.status(200).json({ message: "updated successfully" });
});

export const deleteDocument = asynchandler(async (req: CustomRequest, res: Response) => {
    const { deleteid } = req.params;
    await Document.destroy({ where: { id: deleteid } });
    res.status(200).json({ message: "document deleted successfully" });
});