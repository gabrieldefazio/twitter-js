const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');
const PORT = 3000;
const routes = require('./routes');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.listen(PORT);
app.use('/', volleyball);
app.use('/', routes);
app.get('/', function(req, res){
    res.send('index')
});
app.use(express.static('public'));



