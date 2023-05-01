import express from "express";
import {
    getProducts,
    postProduct,
    getProductById,
    deleteproductById,
    updateproductById,
    getProductByCategotyId} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getProducts);

router.get("/product",getProductById)

router.post("/create-product", postProduct);

router.post("/delete-product/", deleteproductById);

router.post("/update-product", updateproductById);

router.get("/categorie-pages/:ownedbyCategory",getProductByCategotyId);

export default router;
