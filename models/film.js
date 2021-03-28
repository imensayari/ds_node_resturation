const mongoose = require('mongoose');

const filmSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    seances: {
        type: [String],
        required: true
    }
});

const film = module.exports = mongoose.model('film', filmSchema);