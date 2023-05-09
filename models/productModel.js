import mongoose from "mongoose";
const {Schema} = mongoose;
import categoryModel from "./categoryModel.js";

const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    productDescription: {
        type: String,
        required: true,
    },
    productPrice: {
        type: Number,
        require: true,
    },
    
    ownedbyCategory:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category'
    }
});

const productModel = mongoose.model("product", productSchema);

export default productModel;
