const User = require("../models/User");

// Show signup form
module.exports.renderSignupForm = (req, res) => {
    res.render("users/signup.ejs");
};

// Handle signup logic
module.exports.signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);

        req.login(registeredUser, (err) => {
            if (err) {
                return next(err); // Use next to pass to error handler
            }
            req.flash("success", "Welcome to Wanderlust!");
            return res.redirect("/listings"); // Add return to prevent header issues
        });
    } catch (err) {
        req.flash("error", err.message);
        return res.redirect("/signup"); // Add return to ensure no further execution
    }
};

// Show login form
module.exports.renderLoginForm = (req, res) => {
    res.render("users/login.ejs");
};

// Handle login logic (relies on Passport.js middleware)
module.exports.login = (req, res) => {
    req.flash("success", "Welcome back to Wanderlust!");
    const redirectUrl = res.locals.redirectUrl || "/listings";
    return res.redirect(redirectUrl); // Add return
};

// Handle logout
module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You are logged out!");
        return res.redirect("/listings"); // Add return
    });
};
