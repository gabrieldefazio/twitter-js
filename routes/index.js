const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name/', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
    var id = req.params.id;
    var list = tweetBank.find( {id: Number(id)} );
    res.render( 'index', { tweets: list } );
});

router.post('/tweets', function(req, res) {
    var name = req.body.name;
    var text = req.body.text;
    var id = tweetBank.id();
    tweetBank.add(name, text, id);
    res.redirect('/');
});

module.exports = router;