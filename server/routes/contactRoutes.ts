import express from "express";
import { saveContact, getContact, updateContact, deleteContact } from "../controllers/contactController";
import authenticationJwt from "../middleware/auth";

const router = express.Router();

router.post("/addcontact", authenticationJwt, saveContact );
router.get("/getcontact", authenticationJwt, getContact);
router.put("/udpatecontact/:contactid", authenticationJwt, updateContact);
router.delete("/deletecontact/:contactid", authenticationJwt, deleteContact);

export default router;