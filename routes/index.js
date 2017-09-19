const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets } );
});

router.get('/users/:name/', function(req, res) {
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
    var id = req.params.id;
    console.log(id)
    var list = tweetBank.find( {id: Number(id)} );
    console.log(list)
    res.render( 'index', { tweets: list } );
});


module.exports = router;