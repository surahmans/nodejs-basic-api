const mongoose = require('../config/database')

const GeoSchema = new mongoose.Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
})

const NinjaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name field is require']
    },
    rank: String,
    geometry: GeoSchema
})

const Ninja = mongoose.model('Ninja', NinjaSchema)

module.exports = Ninja
