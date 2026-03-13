import express from "express";
import authenticationJwt from "../middleware/auth";
import multer from "multer";
import { uploadDocument, getDocument, writeDocument, getFile, updateDocument, deleteDocument } from "../controllers/documentController";

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/uploaddocument', authenticationJwt, upload.single('file'), uploadDocument);
router.get("/getfile", authenticationJwt, getFile);
router.post("/writedocument", authenticationJwt, writeDocument);
router.get("/getdocument", authenticationJwt, getDocument);
router.put("/updatedocument/:docid", authenticationJwt, updateDocument);
router.delete("/deletedocument/:deleteid", authenticationJwt, deleteDocument );

export default router;