import categoryModel from "../models/categoryModel.js";

// Get All Categories
export const getCategories = async (req, res, next) => {
    const category = await categoryModel.find()
    res.status(200).render("category/getCategories", {title: "Category",categories:category});
};

// Create CategoryModel||
export const postCategory = async (req, res, next) => {
    // Send categoryName to the req.body
    const categoryName = req.body.categoryName;
    const categoryDescription = req.body.categoryDescription

    // create new category with mongoose
    const category = await categoryModel.create({
        categoryName,categoryDescription
    });

    console.log(category);
    //   res.status(201).redirect("/categories");
    res.status(201).json({category});
    
    //res.redirect("/") // recharge la page ou dans une page de mon choix
};

//Delete category
export const deleteCategoryById = async (req, res, next) => {
    // Send categoryName to the req.body
    const categoryId = req.params._id;


    // create new category with mongoose
    const category = await categoryModel.findByIdAndDelete({_id: categoryId});

    //   res.status(201).redirect("/categories");
    res.status(201).json({category});
};

//update category
export const updateCategoryById = async (req, res, next) => {
    // Send categoryName to the req.body
    const _id = req.body._id;
    const categoryName = req.body.categoryName;
    const categoryDescription = req.body.categoryDescription;
    

    // create new category with mongoose
    const category = await categoryModel.findByIdAndUpdate(_id, {categoryName,categoryDescription});

    //   res.status(201).redirect("/categories");
    res.status(201).json({category});
};


