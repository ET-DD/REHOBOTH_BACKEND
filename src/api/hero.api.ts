import express from "express";
import {
 create,
 update, 
 getHero,
 getHeros, 
 deleteHero
} from "../controller/hero/index.hero.controller";
import { authJWT } from "../middleware/authJWT";
const router = express.Router();

router.post("/create", create);
router.get("/get",  getHeros);
router.get("/show/:id", authJWT, getHero);
router.put("/update/:id", authJWT, update);
router.delete("/delete/:id", authJWT, deleteHero);



export default router;
