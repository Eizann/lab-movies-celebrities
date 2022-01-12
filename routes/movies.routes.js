// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");

// all your routes here
router.get('/', async (req, res, next) => {
    try {
        const movies = await MovieModel.find().populate("cast");
        res.render('movies/movies', {
            movies,
        })
    } catch(e) {
        console.error(e);
    }
})

router.get('/create', async (req, res, next) => {
    try {
    const celebrities = await CelebrityModel.find();
    res.render('movies/new-movie', {
        celebrities
    });
    } catch(e) {
        console.error(e);
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const movie = await MovieModel.findById(req.params.id).populate("cast");
        res.render('movies/movie-details', {
            movie,
        });
    } catch (e) {
        console.error(e)
    }
})

router.get('/:id/edit', async (req, res, next) => {
    try {
        const movie = await MovieModel.findById(req.params.id);
        const celebrities = await CelebrityModel.find();
        res.render('movies/edit-movie', {
            movie,
            celebrities
        });
    } catch(e) {
        next(e);
    }
})

router.post('/create', async (req, res, next) => {
    try {
        await MovieModel.create(req.body);
        res.redirect('/movies');
    }
    catch(error) {
        next(e);
    }
})

router.post('/:id/delete', async (req,res, next) => {
    try {
        await MovieModel.findByIdAndDelete(req.params.id);
        res.redirect('/movies');
    } catch (e) {
        next(e);
    }
})

router.post('/:id/edit'), async (req, res, next) => {
    console.log('dasdsada');
    try {
        await MovieModel.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/movies')
    } catch (e) {
        next(e);
    }
}

module.exports = router;