import express from "express";
import {
    getCategories,
    postCategory,
    deleteCategoryById, updateCategoryById, getCategoryById
} from "../controllers/categoryController.js";

const router = express.Router();

router.get("/categorie",getCategoryById)

router.get("/categories", getCategories);

router.post("/create-category", postCategory);

router.post("/delete-category", deleteCategoryById);

router.post("/update-category", updateCategoryById)

export default router;
