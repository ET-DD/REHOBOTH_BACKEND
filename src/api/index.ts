import express from "express";
import auth from "./auth.api";
import blog from "./blog.api";
import route from "./routes.api";
import path from "./path.api";
import customer from "./customer.api";
import contact from "./contact.api";
import contactinfo from "./contactinfo.api";
import hero from "./hero.api"
import service from "./service.api"

const router = express.Router();

router.use("/auth", auth);
router.use("/hero", hero);
router.use("/blog", blog);
router.use("/service", service);
router.use("/route", route);
router.use("/path", path);
router.use("/customer", customer);
router.use("/contact", contact);
router.use("/contact-info", contactinfo);




export default router;
