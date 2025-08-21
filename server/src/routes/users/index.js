const express = require("express");
const orderRoutes = require("./order.routes");
const addressRoutes = require("./address.routes");
const cartRoutes = require("./cart.routes");
const wishListRoutes = require("./wishList.routes");
const { getProfile } = require("../../controllers/users/profile.controller");

const router = express.Router();

router.get("/me", getProfile);

router.use("/address", addressRoutes);
router.use("/order", orderRoutes);
router.use("/cart", cartRoutes);
router.use("/wishList", wishListRoutes);

module.exports = router;