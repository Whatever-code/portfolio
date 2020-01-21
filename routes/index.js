const router = require('express').Router();
const Mail = require('mail');

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

    var mail = Mail.Mail({
        host: 'smtp.gmail.com',
        username: 'whatevercode1@gmail.com',
        password: 'WhatevercodeGmail'
    });

    mail.message({
        from: 'portfolioWhatevercode@example.net',
        to: ['recipient@somewhere.org'],
        subject: 'Hello from Node.JS'
    }).body('Node speaks SMTP!')
      .send(function(err) {
        if (err) throw err;
        console.log('Sent!');
    });

    res.render('contact');
});

module.exports = router;