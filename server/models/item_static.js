const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    id: { type: Number, unique: true },
    name: String,
    description: String,
    sanitizedDescription: String,
    plaintext: String,
    tags: [String],
    into: [Number],
    maps: [{
        map: String,
        purchasable: Boolean
    }],
    stats: [{
        name: String,
        value: Number
    }],
    gold: {
        base: Number,
        total: Number,
        sell: Number,
        purchasable: Boolean
    },
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

module.exports = mongoose.model('StaticItem', itemSchema);