const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
    productName: {type: String, required: true},
    productPrice: {type: Number, required: true},
    paymentMethod: {type: String, required: true},
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;