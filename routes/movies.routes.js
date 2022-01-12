// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

// all your routes here

router.get('/create', async (req, res, next) => {
    try {
    const celebrities = await CelebrityModel.find();
    console.log(celebrities)
    res.render('movies/new-movie', {
        celebrities
    });
    } catch(e) {
        console.error(e);
    }
})

router.get('/', async (req, res, next) => {
    try {
        Promise.all([
            MovieModel.find(),
            CelebrityModel.find(),   
        ])
        .then(data => {
            res.render('movies/movies', {
                movies: data[0],
                celebrities: data[1]
            })
        })
    } catch(e) {
        console.error(e);
    }
})

router.post('/create', async (req, res, next) => {
    try {
        await MovieModel.create(req.body);
        res.redirect('/movies');
    }
    catch(e) {
        next(e)
    }
})

module.exports = router;