const express = require( 'express' );
const app = express();
const nunjucks = require('nunjucks');
const volleyball = require('volleyball');
const PORT = 3000;
const routes = require('./routes');
const bodyParser = require('body-parser');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates

app.listen(PORT);
app.use(volleyball);
app.use(bodyParser.urlencoded ({extended : true}));
app.use('/', routes);
app.use(express.static('public'));



