// models/GroceryItem.js
const mongoose = require("mongoose");
const grocerySchema = new mongoose.Schema({
    item: {
        type: String,
        required: [true, "item name is required"]
    },
    food_group: {
        type: String,
        required: [true, "food_group is required"],
        enum: ["fruits", "dairy", "proteins", "vegetables", "nuts", "grains"]
    },
    price_in_usd: {
        type: Number,
        required: [true, "please enter a number for price_in_usd"],
        min: [0, "Price must be a positive number"]
    }
});
module.exports = mongoose.model("GroceryItem", grocerySchema);
