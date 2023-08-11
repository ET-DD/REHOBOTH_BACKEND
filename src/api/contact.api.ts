import express from "express";
import {
    create,
    getContact,
    getContacts
} from "../controller/contact/index.contact.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", create);
router.get("/get", authJWT, getContacts);
router.get("/show/:id", authJWT, getContact);


export default router;
