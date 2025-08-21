const express = require("express");
const { getWishListItems, addWishListItem, deleteWishListItem, deleteAllWLItems } = require("../../controllers/users/wishList.controller");

const router = express.Router();

router.get("/", getWishListItems);
router.post("/", addWishListItem);
router.delete("/delete-all", deleteAllWLItems)
router.delete("/:id", deleteWishListItem);

module.exports = router;