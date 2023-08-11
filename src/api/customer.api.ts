import express from "express";
import {
 create, 
 getCustomers,
 getCustomer
} from "../controller/customer/index.customer.controller";
import { authJWT } from "../middleware/authJWT";
import { upload } from "../config/mutler";

const router = express.Router();

router.post("/create", upload.array("files", 10), create);
router.get("/get",  getCustomers);
router.get("/show/:id", authJWT, getCustomer);
export default router;
