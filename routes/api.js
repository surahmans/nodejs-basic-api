const router = require('express').Router()
const Ninja = require('../models/ninja')

router.get('/ninjas', function(req, res, next) {
    Ninja.aggregate().near({
        near: [parseFloat(req.query.long), parseFloat(req.query.lat)],
        maxDistance: 10000,
        spherical: true,
        distanceField: "dist.calculated"
    }).then(function(ninjas) {
        res.send(ninjas)
    }).catch(next)
})

router.get('/ninjas/:id', function(req, res, next) {
    Ninja.findById(req.params.id).then(function(ninja) {
        res.send(ninja)
    }).catch(next)
})

router.post('/ninjas', function(req, res, next) {
    Ninja.create(req.body).then(function(ninja) {
        res.send(ninja)
    }).catch(next)
})

router.patch('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndUpdate(req.params.id, req.body).then(function() {
        Ninja.findById(req.params.id).then(function(ninja) {
            res.send(ninja)
        })
    }).catch(next)
})

router.delete('/ninjas/:id', function(req, res, next) {
    Ninja.findByIdAndRemove(req.params.id).then(function(ninja) {
        res.send(ninja)
    }).catch(next)
})

module.exports = router
