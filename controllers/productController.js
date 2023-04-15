import productModel from "../models/productModel.js";

// Get All Products
export const getProducts = async (req, res, next) => {
    const product = await productModel.find()
    res.status(200).render("product/getProducts", {title: "ProductsList", product: product});
};

// Create productModel||
export const postProduct = async (req, res, next) => {
    // Send productName to the req.body
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;
    const productPrice = req.body.productPrice;
    const ownedbyCategory= req.body.ownedbyCategory;

    // create new product with mongoose
    const product = await productModel.create({
        productName:productName, productDescription:productDescription, productPrice:productPrice,ownedbyCategory
    });

    console.log(product);
    //   res.status(201).redirect("/product");
    res.status(201).json({product});
};

//Delete product
export const deleteproductById = async (req, res, next) => {
    // Send productName to the req.body
    const productId = req.body._id;


    // create new product with mongoose
    const product = await productModel.findByIdAndDelete({_id: productId});

    //   res.status(201).redirect("/categories");
    res.status(201).json({product});
};

//update product
export const updateproductById = async (req, res, next) => {
    // Send categoryName to the req.body
    const _id = req.body._id;
    const productName = req.body.productName;
    const productDescription = req.body.productDescription;


    // create new product with mongoose
    const product = await productModel.findByIdAndUpdate(_id, {productName, productDescription});

    //   res.status(201).redirect("/product");
    res.status(201).json({product});
};


