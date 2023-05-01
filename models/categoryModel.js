import mongoose from "mongoose";

const {Schema} = mongoose;

const categorySchema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },

    categoryDescription: {
        type: String,
        required: true,
    }
    
});

const CategoryModel = mongoose.model("category", categorySchema);

export default CategoryModel;
