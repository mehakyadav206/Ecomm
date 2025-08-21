module.exports = (req, res, next) => {
    // console.log(req.user);
    if(req.user.role !== "admin"){
        return res.status(403).json({ success: false, error: "Access denied!" });
    }
    next();
}