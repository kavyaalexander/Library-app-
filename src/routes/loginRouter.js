const express = require(`express`);
const loginRouter = express.Router();

function router(nav) {
    var login = [{
        img: 'login 1.jpg'
    }, {
        img: 'login2.jpg'
    }, {
        img: 'login3.jpg'
    }];
    loginRouter.get('/', function(req, res) {
        res.render("login", {
            nav,
            title: 'Login',
            login

        });
    });

    return loginRouter;
}
module.exports = router;