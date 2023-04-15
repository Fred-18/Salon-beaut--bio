import express from "express";
import {
    getProducts,
    postProduct,
    deleteproductById,
    updateproductById
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);

router.post("/create-product", postProduct);

router.post("/delete-product", deleteproductById);

router.post("/update-product", updateproductById);

export default router;