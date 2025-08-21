const Order = require("../../models/order");

const getOrdersDB = async () => {
    return await Order.find({}).populate("user").populate({
        path: "orderItems.product",
    })
    .populate("shippingAddress");
};

const createOrderDB = async (data) => {
    const newOrder = new Order(data);
    return await newOrder.save();
};

const cancelOrderDB = async (id) => {
    return await Order.findByIdAndUpdate(id, { status: "cancelled" });
};

module.exports = { getOrdersDB, createOrderDB, cancelOrderDB };