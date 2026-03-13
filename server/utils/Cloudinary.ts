import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localPathFile: string) => {
    try {
        if (!localPathFile) return null;  
        const uploadResult = await cloudinary.uploader.upload(localPathFile, { resource_type: "raw" });
        console.log("uploaded done")
        console.log(uploadResult);
        return uploadResult; 
    } catch (error) {
        console.error("Upload Error:", error);
        fs.unlinkSync(localPathFile); 
        return null;
    }
};

export default uploadOnCloudinary;
