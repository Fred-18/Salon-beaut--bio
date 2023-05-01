import productModel from "../models/productModel.js";
import categoryModel from "../models/categoryModel.js";

// Get All Products
export const getProducts = async (req, res, next) => {
    const product = await productModel.find()
    res.status(200).render("pages/getProducts", {title: "ProductsList", product: product});
};

// Create productModel||
export const postProduct = async (req, res, next) => {
    // Send productName to the req.body
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const productPrice = req.body.productPrice;
    const ownedbyCategory = req.body.ownedbyCategory;

    // create new product with mongoose
    const product = await productModel.create({
        productName, productDescription, productPrice, ownedbyCategory
    });

    console.log(product);
    res.status(201).redirect("/");
};

//Delete product
export const deleteproductById = async (req, res, next) => {
    // Send productName to the req.body
    const _id = req.body._id


    // delete product with mongoose
    const product = await productModel.findByIdAndDelete({_id});


    res.status(201).redirect("/");
    //res.status(201)({product});
};
//update product
export const updateproductById = async (req, res, next) => {
    // Send categoryName to the req.body
    const _id = req.body._id;
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const productPrice = req.body.productPrice
    // update product with mongoose
    const product = await productModel.findByIdAndUpdate(_id, {productName, productDescription, productPrice});

    res.status(201).redirect("/");
    //res.status(201).json({product});
};
export const getProductByCategotyId = async (req, res, next) => {
    const ownedbyCategory = req.params.ownedbyCategory;
    const product = await productModel.find({ownedbyCategory})
    const category = await categoryModel.find();
    res.render("pages/categoriesPages", {title: "Product by Category", product: product, categories: category});
    //res.status(201).redirect("/");
}
export const getProductById = async (req, res, next) => {
    const _id = req.body._id;
    const product = await productModel.findById(_id)

    res.status(200).json({product});
}
