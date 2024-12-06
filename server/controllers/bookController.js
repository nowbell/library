const uuid = require('uuid')
const path = require('path')
const {Book, Genre} = require('../models/models')

class BookController {
    async create(req, res) {
        const {author, name, summary, quote, genreID } = req.body;
        const {img, img_author} = req.files || {}
        let fileNameImg = uuid.v4() + ".jpg"
        let fileNameImgAuthor = uuid.v4() + ".jpg"
        await img.mv(path.resolve(__dirname, '..', 'static', fileNameImg))
        await img_author.mv(path.resolve(__dirname, '..', 'static', fileNameImgAuthor))

        const book = await Book.create({author, name, summary, quote, genreID,  img: fileNameImg, img_author: fileNameImgAuthor})

        return res.json(book)
    }

    async getAll(req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let books;
        let offset = page * limit - limit
        books = await Book.findAndCountAll({limit, offset})
        return res.json(books)
    }

    async getOne(req, res) {
        const {id} = req.params
        const book = await Book.findOne(
            {
                where: {id}
            }
        )
        return res.json(book)
    }

    async destroy(req, res) {
        Book.destroy({
            where: {
                name: req.body.name
            }
        }).then((res) => {
            console.log(res);
        });
    }
}

module.exports = new BookController();