const WishList = require("../../models/wishlist");

const getWishListItemsDB = async (userId) => {
    return await WishList.find({ user: userId }).populate("item").exec();
};

const addWishListItemDB = async (user, item) => {
    const isExist = await WishList.findOne({ user, item});

    if (isExist) {
        return { error: "Item already in wishlist!"}
    }

    const data = new WishList({user, item})
    return await data.save();
};

const deleteWishListItemDB = async (id) => {
    return await WishList.findByIdAndDelete(id);
};

const deleteAllWLItemsDB = async (userId) => {
    return await WishList.deleteMany({ user: userId });
};

module.exports = { getWishListItemsDB, addWishListItemDB, deleteWishListItemDB, deleteAllWLItemsDB };