const express = require(`express`);
const adminRouter = express.Router();

function router(nav) {
    var signup = [{
        img: 'signin3.jpg',

    }, {
        img: 'signup.jpg'
    }, {
        img: 'signup1.jpg'
    }];
    adminRouter.get('/', function(req, res) {
        res.render("sign up", {
            nav,
            title: 'Sign Up',
            signup

        });
    });

    return adminRouter;
}
module.exports = router;