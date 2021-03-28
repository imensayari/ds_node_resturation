const mongoose = require('mongoose');
const film = require('./film');

const seanceSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    date: {
        type: date,
        required: true
    },
    temps: {
        type: String,
        required: true
    },
    acteurs: {
        type: [String],
        required: true
    },
    nombre_places: {
        type: Number,
        required: true
    },
    film: {
        type: film,
        required: true
    }
});

const seance = module.exports = mongoose.model('seance', seanceSchema);