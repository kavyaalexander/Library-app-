const express = require(`express`);
const booksRouter = express.Router();

function router(nav) {
    var books = [{
        title: 'The Best Books Of 2020',
        link: 'https://www.esquire.com/entertainment/books/g30630848/best-books-of-2020/',
        img: 'best-books-of-the-year2020-1.png'
    }, {
        title: '2020 visions: the year ahead in books ',
        link: 'https://www.ft.com/content/7714f0d2-1da7-11ea-81f0-0c253907d3e0',
        img: '2020 vision.jpg'
    }, {
        title: 'Fantasy & Science fiction books',
        link: 'https: //www.thenerddaily.com/2020-fantasy-sci-fi-book-releases/',
        img: 'Fantasy-Sci-Fi-Book.jpg'
    }, {
        title: 'Medicine Books',
        link: 'https://www.topuniversities.com/courses/medicine/seven-books-read-if-youre-medicine-student',
        img: 'medicine book.jpg'
    }, {
        title: 'Fiction & Nonfiction books',
        link: 'https://in.pinterest.com/richlin13/fiction-and-non-fiction/',
        img: 'Best-Fiction-and-Nonfiction-Books.jpg'
    }, {
        title: 'Magical Books for Adult',
        link: 'https://www.bookbub.com/blog/new-magical-realism-books?popupdelay=0&source=pinterest_design',
        img: 'magical books for adults.jpg'
    }]
    booksRouter.get('/', function(req, res) {
        res.render("books", {
            nav,
            title: 'Books',
            books
        });
    });
    booksRouter.get('/:id', function(req, res) {
        const id = req.params.id
        res.render('book', {
            nav,
            title: 'Book',
            book: books[id]
        });
    });
    return booksRouter;
}


module.exports = router;