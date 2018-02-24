const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mapSchema = new Schema({
    mapId: { type: Number, unique: true },
    mapName: String,
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

module.exports = mongoose.model('StaticMap', mapSchema);