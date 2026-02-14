exports.isAuthenticated = (req, res, next) => {
if (!req.session.user) {
    return res.redirect("/login");
}
next();
};

exports.authorize = (role) => {
    return (req, res, next) => {
    if (req.session.user.role !== role){
        return res.send("Access Denied");
    }
    next();
    };
};
