const express = require( 'express' );
const app = express();
const PORT = 3000;

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    console.log(req.method,req.path, res.statusCode)
    next();
})

app.get('/', function(req,res){
    res.send('Hello World!')
})

app.listen(PORT, function(){
    console.log('Listening')
})

