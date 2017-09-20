const router = require('express').Router();
const tweetBank = require('../tweetBank');


router.get('/', (req, res)=>{
    let tweets = tweetBank.list();
    res.render( 'index', { tweets: tweets, showForm: true } );
});

router.get('/users/:name/', (req, res)=>{
    let name = req.params.name;
    let list = tweetBank.find( {name: name} );
    res.render( 'index', { tweets: list, showForm: true, name: req.params.name } );
});

router.get('/tweets/:id', (req, res)=> {
    let id = req.params.id
    let thisTweet = tweetBank.find({id: +id});
  res.render('index', {tweets: thisTweet})
});

// noinspection Annotator
router.post('/tweets', (req, res)=>{
    let name = req.body.name;
    let text = req.body.text;
    let id = tweetBank.id();
    tweetBank.add(name, text, id);
    res.redirect('/');
});

module.exports = router;