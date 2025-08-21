const { createOrderDB, getOrdersDB, cancelOrderDB } = require("../../services/users/order.services");

const getOrders = async (req, res) => {
    const data = await getOrdersDB();
    return res.json({ success: true, data });
};

const createOrder = async (req, res) => {
    const { user, orderItems, totalAmount, paymentMethod, shippingAddress } = req.body;

    if(!user || !orderItems || !totalAmount || !paymentMethod || !shippingAddress) {
        return res.json({ success: false, error: "All fields are required"});
    }

    if(!Array.isArray(orderItems)){
        return res.json({ success: false, error: "Order items should be an array"});
    }

    try{
        const data = await createOrderDB(req.body);
        return res.json({ success: true, data });
    }catch (error){
        return res.json({
            success: false,
            error: "something went wrong!",
        });
    }
};

const cancelOrder = async (req, res) => {
    const { id } = req.params;

    try{
        const data = await cancelOrderDB (id);
        return res.json({
            success: true,
            message: "Order cancelled successfully!",
            data,
        })
    }catch(error) {
        return res.json({
            success: false,
            error: "Unable to cancel Order"
        })
    }
};

module.exports = { getOrders, createOrder, cancelOrder };