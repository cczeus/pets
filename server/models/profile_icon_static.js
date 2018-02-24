const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileIconSchema = new Schema({
    id: { type: Number, unique: true },
    image: {
        full:   String,
        group:  String,
        sprite: String,
        h:      Number,
        w:      Number,
        y:      Number,
        x:      Number
    }
});

module.exports = mongoose.model('StaticProfileIcon', profileIconSchema);