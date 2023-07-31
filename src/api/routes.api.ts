import express from "express";
import {
  createRoute,
  getRoutes,
  getRoute,
  deleteRoute,
  updateRoute
} from "../controller/route/index.route.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create",  createRoute);
router.get("/get",  getRoutes);
router.get("/show/:id",  getRoute);
router.get("/update/:id",   updateRoute);

router.delete("/delete/:id",  deleteRoute);

export default router;
