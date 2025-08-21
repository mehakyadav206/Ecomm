const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    item: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true},
    quantity: { type: Number, required: true, min: 1 },

    // items: [
    //     {
    //         quantity: { type: Number, required :true, min: 1 },
    //         product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    //     },
    // ],
    // totalAmount: { type: Number, required: true },
});

//cartSchema.index({ user: 1, item: 1 }, { unique: true });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;