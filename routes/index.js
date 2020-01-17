const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/Development', (req, res) => {
    res.render('development');
});

router.get('/Contact', (req, res) => {
    res.render('contact');
});

router.post('/Contact', (req, res) => {
    res.render('contact');
});

module.exports = router;