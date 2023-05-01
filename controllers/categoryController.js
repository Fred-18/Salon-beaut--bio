import categoryModel from "../models/categoryModel.js";

// Get All Categories
export const getCategories = async (req, res, next) => {
    const category = await categoryModel.find()
    res.status(200).render("pages/getCategories", {title: "Category", categories: category});
};
// Create CategoryModel||
export const postCategory = async (req, res, next) => {
    // Send categoryName to the req.body
    const categoryName = req.body.categoryName;
    const categoryDescription = req.body.categoryDescription;

    // create new category with mongoose
    const category = await categoryModel.create({
        categoryName, categoryDescription
    });
    //   res.status(201).redirect("/categories");
    res.status(201).json({category});
    //res.redirect("/") // recharge la page ou dans une page de mon choix
};

//Delete category
export const deleteCategoryById = async (req, res, next) => {
    const categoryId = req.params._id;
    // delete new category with mongoose
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
    // update new category with mongoose
    const category = await categoryModel.findByIdAndUpdate(_id, {categoryName, categoryDescription});

    //   res.status(201).redirect("/categories");
    res.status(201)({category});
};

export const getCategoryById = async (req, res, next) => {
    const _id = req.params._id;

    const category = await categoryModel.findById({_id})
    res.status(201).redirect("/");
    res.render("pages/categoriesPages",{title:"Soin des yeux",categories:category})
}


