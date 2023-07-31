import express from "express";
import {
 create, 
 getCustomers,
 getCustomer
} from "../controller/customer/index.customer.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", create);
router.get("/get",  getCustomers);
router.get("/show/:id", authJWT, getCustomer);


export default router;
