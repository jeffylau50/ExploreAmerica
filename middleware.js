const isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()){
        req.flash('error', 'You must sign in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports = isLoggedIn;