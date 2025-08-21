const { getWishListItemsDB, addWishListItemDB, deleteWishListItemDB, deleteAllWLItemsDB } = require("../../services/users/wishlist.services");

const getWishListItems = async (req, res) => {
    const { id } = req.user;

    try {
        const data = await getWishListItemsDB(id);
        return res.status(200).json({
            success: true,
            message: "WishList items fetched successfully!",
            data,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "Something went wrong!",
        });
    }
};

const addWishListItem = async (req, res) => {
    const { id } = req.user;
    const { item } = req.body;

    if (!item) {
        return res.json({ success: false, error: "All fields are required", required: ["item"] });
    }

    try {
        const data = await addWishListItemDB(id, item);
        if (data.error) {
            return res.json({ success: false, error: data.error })
        }
        return res.json({ success: true, data });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, error: "Something went wrong!" });
    }
};

const deleteWishListItem = async (req, res) => {
    const { id } = req.params;

    try {
        await deleteWishListItemDB(id, req.user.id);
        return res.json({ success: true, data: "WishList item deleted successfully!" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, error: "Something went wrong!" });
    }
};

const deleteAllWLItems = async (req, res) => {
    try {
        await deleteAllWLItemsDB(req.user.id);
        return res.json({ success: true, data: "All wishlist items deleted successfully!" });
    } catch (error) {
        return res.json({ success: false, error: "Something went wrong!" });
    }
};

module.exports = { getWishListItems, addWishListItem, deleteWishListItem, deleteAllWLItems };