const app = require('express')()
const bodyParser = require('body-parser')

app.listen('3000')

// use body-parser middleware
app.use(bodyParser.json())

app.use('/api', require('./routes/api'))

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});
