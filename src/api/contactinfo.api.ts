import express from "express";
import {
    getContactInfos,
    getContactInfo, 
    createInfo,
    update, 
    deleteInfo
} from "../controller/contact/index.contact.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", createInfo);
router.get("/get",  getContactInfos);
router.get("/show/:id", authJWT, getContactInfo);
router.put("/update/:id", authJWT, update)
router.delete("/delete/:id", authJWT, deleteInfo)


export default router;
