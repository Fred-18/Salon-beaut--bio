
import express from "express";
import {getCategoryById} from "../controllers/categoryController.js";
const router = express.Router();

router.get("/categorie-pages/:_id",getCategoryById)


export default router
