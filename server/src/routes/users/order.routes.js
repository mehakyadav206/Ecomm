const express = require("express");
const { getOrders, createOrder, cancelOrder } = require("../../controllers/users/order.controller");
const router = express.Router();

router.get("/", getOrders);
router.post("/", createOrder);
router.put("/:id", cancelOrder);

module.exports = router;