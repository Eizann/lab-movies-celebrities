// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const CelebrityModel = require("../models/Celebrity.model");

// all your routes here

router.get('/create', (req, res, next) => {
    res.render('celebrities/new-celebrity');
})

router.get('/', async (req, res, next) => {
    try {
        celebrities = await CelebrityModel.find();
        res.render('celebrities/celebrities', {
            celebrities
        } )
    } catch(e) {
        console.error(e);
    }
})

router.post('/create', async (req, res, next) => {
    try {
        console.log(req.body)
        await CelebrityModel.create(req.body);
        res.redirect('/celebrities');
    } catch(e) {
        console.error(e);
        next(e)
    }
})

module.exports = router;