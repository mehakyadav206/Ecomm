const { getAllProductsDB, getAllCategoriesDB, getProductsByCategoryDB, getProductBySlugDB } = require("../services/public.services");

const getAllProducts = async (req, res) => {
    try{ 
        const data = await getAllProductsDB();
        return res.json({ success: true, data });
    }catch (error) {
        return res.json({ success: false, error: "Something went wrong!" });
    }
};

const getAllCategories = async (req, res) => {
    try{
        const data = await getAllCategoriesDB();
        return res.json({ success: true, data });
    }catch (error){
        return res.json({ success: false, error: "Something went wrong!" });
    }
};

const getProductsByCategory = async (req, res) => {
    const { category } = req.params;

    try{ 
        const data = await getProductsByCategoryDB(category);
        if(data.error){
            return res.json({ success: false, error: data.error });
        }

        return res.json({ success: true, data });
    }catch (error) {
        return res.json({ success: false, error: "Something went wrong!" });
    }
};

const getProductBySlug = async (req, res) => {
    const { slug } = req.params;
    // console.log(slug)

    try{
        // console.log("first")
        const data = await getProductBySlugDB(slug);
        // console.log(data);
        if(!data){
            return res.json({ success: false, error: "Product not found!" });
        }

        return res.json({ success: true, data });
    }catch (error){
        return res.json({ success: false, error: "aa Something went wrong!" });
    }
};

module.exports = {getAllProducts, getAllCategories, getProductsByCategory, getProductBySlug};