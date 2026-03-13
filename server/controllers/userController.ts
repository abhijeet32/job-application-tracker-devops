import asynchandler from "express-async-handler";
import User from "../models/userModel";
import OTP from "../models/otpModel";
import sendMail from "../utils/emailService";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fs from "fs";
import uploadOnCloudinary from "../utils/Cloudinary";
import { Response, NextFunction } from "express";
import { CustomRequest } from "../middleware/auth";

export const registeruser = asynchandler(async (req: CustomRequest, res: Response) => {
   const { name, email, password } = req.body;
   const user = await User.findOne({ where: { email } });

   if (user) {
      res.status(400).json({ message: "you have already registered please login" });
      return;
   }
   if (password.length < 8) {
      res.status(403).json({ message: "password is short add atleast 8 character" });
      return;
   }
   const hashpassword = await bcrypt.hash(password, 10);
   const newuser = await User.create({ name, email, password: hashpassword });
   const token = jwt.sign({email, user:email}, process.env.SECRET as string, {expiresIn:'1h'});
   res.status(200).json({ message: "you have registered successfully", token });
});

export const loginuser = asynchandler(async (req: CustomRequest, res: Response) => {
   const { email, password } = req.body;
   const user: any = await User.findOne({ where: { email } });
   if (!user) {
      res.status(403).json({ message: "account not found pleaase register" });
      return;
   }
   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) {
      res.status(403).json({ message: "Invalid password" });
      return;
   }
   const token = jwt.sign({email, user:email}, process.env.SECRET as string, {expiresIn:'3h'});
   res.status(200).json({ message: "login succesfully",token });
});

export const getUserDetails = asynchandler(async(req: CustomRequest, res: Response) => {
   const user = req.user.email;
   if(!user){
       res.status(403).json({message:"Some Invalid error has occured !"});
       return;
   }
   const userData = await User.findOne({ where: { email: user } });   
   res.status(200).json(userData);
});

export const sendOtp = asynchandler(async (req: CustomRequest, res: Response) => {
   const { email } = req.body;
   const isValidemail = await User.findOne({ where: { email } });
   if (!email || !isValidemail) {
      res.status(300).json({ message: "email is required" });
      return;
   };

   const otp = Math.floor(Math.random() * 1000000);
   await OTP.create({ email, otp: otp.toString(), expiresAt: Date.now() + 3 * 60 * 1000 });
   const info  = await sendMail(email, "Password Reset OTP", `Your OTP is ${otp}`);
   res.status(200).json({ message: "OTP sent successfully" });
});

export const verifyOtp = asynchandler(async( req: CustomRequest, res: Response) => {
   const{email, otp} = req.body;
   if(!email || !otp){
       res.status(300).json({message:"email is required"});
       return;
   }
   const recordeotp = await OTP.findOne({ where: { email, otp } });
   if(!recordeotp){
       res.status(300).json({message:"Invalid error has occured"});      
       return;
   }
   await OTP.destroy({ where: { email, otp } });
   res.status(200).json({message:"OTP verified successfully"});   
});

export const updatePassword = asynchandler( async(req: CustomRequest, res: Response) => {
   const{email,newPassword,confirmPassword} = req.body;
   if(!email){
      res.status(400).json({message:"Email is required to update password"});
      return;
   }
   const isValid = await User.findOne({ where: { email } });
   if(!isValid){
      res.status(400).json({message:"Email is Invalid!"})
      return;
   }
   if(newPassword!=confirmPassword){
      res.status(400).json({message:"enter same password in both the box"});
      return;
   }
   if (newPassword.length < 8) {
      res.status(400).json({ message: "password is short add atleast 8 character" });
      return;
   }
   const hashpassword = await bcrypt.hash(newPassword, 10);
   await User.update({ password: hashpassword }, { where: { email } });
   res.status(200).json({message:"password has updated successfully"});
});

export const uploadProfile = async function (req: CustomRequest, res: Response, next: NextFunction) {
    try {
       if(!req.file){
        res.status(500).json({message:"profile photo not uploaded"});
        return;
       }
       const localPathFile = req.file.path;
       const uploadfile: any  =  await uploadOnCloudinary(localPathFile);

       if (!uploadfile || !uploadfile.url) {
          res.status(500).json({ message: "Error uploading file to cloud" });
          return;
       }

       fs.unlink(localPathFile ,(err)=>{
        if(err){
            console.error("error deleting profile photo", err);
        }else{
            console.log("profile photo has been deleted from the storage:",localPathFile);
        }
       });

       res.status(200).json({message:"profile photo uploaded successfully!", uploadfile});
    } catch (error) {
        console.log("some error has occured", error);
        res.status(500).json({error:"profile photo upload has failed"})
    }
}