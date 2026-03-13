import multer from "multer";
import path from "path";
import fs from "fs";

const TEMP_DIR = path.join(__dirname, "..", "uploads");

if (!fs.existsSync(TEMP_DIR)) {
    fs.mkdirSync(TEMP_DIR, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, TEMP_DIR)
    },
    filename: function (req, file, cb) {
      console.log("the name of file is", file.originalname);
      cb(null, file.originalname);
    }
  })
  
 const upload = multer({ 
   storage
 });

 export default upload;