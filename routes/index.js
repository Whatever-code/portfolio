const router = require('express').Router();
const maillib = require('mail');

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

    var mail = maillib.Mail({
        host: 'smtp.gmail.com',
        username: 'whatevercode1@gmail.com',
        password: 'WhatevercodeGmail'
    });

    console.log(req.body);

    mail.message({
        from: req.body.email,
        to: ['whatevercode1@gmail.com'],
        subject: 'Ask: ' + req.body.firstname + req.body.lastname
    }).body(req.body)
      .send(function(err) {
        if (err) throw err;
        console.log('Sent!');
    });

    res.render('contact');
});

module.exports = router;