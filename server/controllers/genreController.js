const {Genre, Book} = require('../models/models');
const ApiError = require('../error/ApiError');

class GenreController {
    async create(req, res) {
        const {name} = req.body;
        const genre = await Genre.create({name})
        return res.json(genre)
    }

    async getAll(req, res) {
        const genres = await Genre.findAll()
        return res.json(genres)
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

module.exports = new GenreController();