const express = require(`express`);
const app = express();
const nav = [{
    link: '/books',
    name: 'Books'
}, { link: '/authors', name: 'Authors' }, { href: '/signup', heading: 'Sign Up' }, { href: '/login', heading: 'Login' }]


const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorRouter = require('./src/routes/authorRoutes')(nav)
const contactRouter = require('./src/routes/contactRouter')(nav)
const adminRouter = require('./src/routes/adminRouter')(nav)
const loginRouter = require('./src/routes/loginRouter')(nav)
const addbookRouter = require('./src/routes/addbookRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/Authors', authorRouter);
app.use('/Contact', contactRouter);
app.use('/Signup', adminRouter);
app.use('/Login', loginRouter);
app.use('/addbook', addbookRouter);
app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library Management'

    });

});



app.listen(5004);
console.log("Server ready at port 5004");