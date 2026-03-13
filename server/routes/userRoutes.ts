import express from "express";
import multer from "multer";
const upload = multer({ dest: 'uploads/' });
import authenticationJwt from "../middleware/auth";
import { registeruser, loginuser, sendOtp, verifyOtp, updatePassword, uploadProfile, getUserDetails } from "../controllers/userController";

const router = express.Router();

router.post("/register", registeruser);
router.post("/login", loginuser);
router.get("/userdetails", authenticationJwt, getUserDetails);
router.post("/sendotp", sendOtp );
router.post("/verifyotp", verifyOtp);
router.put("/updatepassword", updatePassword);
router.post('/uploaddocument', upload.single('avatar'), uploadProfile);

export default router;