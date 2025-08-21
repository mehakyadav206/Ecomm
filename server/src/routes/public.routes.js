const express = require("express");
const { getAllProducts, getAllCategories, getProductsByCategory, getProductBySlug } = require("../controllers/public.controller");

const router = express.Router();

//list of products
router.get("/products", getAllProducts);

//list of categories
router.get("/categories", getAllCategories);

//products by category
router.get("/products/:category", getProductsByCategory);

//product details
router.get("/product/:slug", getProductBySlug);

module.exports = router;