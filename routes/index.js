const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', (req, res)=>{
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name/', (req, res)=>{
    var name = req.params.name;
    var list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true } );
});

router.get('/users/:name/tweets/:id', (req, res)=>{
    var id = req.params.id;
    var list = tweetBank.find( {id: Number(id)} );
    res.render( 'index', { tweets: list } );
});

router.post('/tweets', (req, res)=>{
    var name = req.body.name;
    var text = req.body.text;
    var id = tweetBank.id();
    tweetBank.add(name, text, id);
    res.redirect('/');
});

module.exports = router;