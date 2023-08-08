import express from "express";
import {
 create, 
 update,
 getContactInfos, 
 getContactInfo, 
 deleteInfo
} from "../controller/contact/index.contact.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", create);
router.get("/get",  getContactInfos);
router.get("/show/:id", authJWT, getContactInfo);
router.put("/update/:id", authJWT, update)
router.delete("/delete/:id", authJWT, deleteInfo)


export default router;
