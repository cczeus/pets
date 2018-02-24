const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const summonerSpellSchema = new Schema({
    id: { type: Number, unique: true },
    name: String,
    key: String,
    description: String,
    sanitizedDescription: String,
    tooltip: String,
    sanitizedTooltip: String,
    resource: String,
    costType: String,
    summonerLevel: Number,
    maxRank: Number,
    modes: [String],
    range: [Number],
    rangeBurn: String,
    cooldown: [Number],
    cooldownBurn: String,
    cost: [Number],
    costBurn: String,
    effect: [[Number]],
    effectBurn: [String],
    vars: [{
        coeff: [Number],
        link: String,
        key: String
    }],
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

module.exports = mongoose.model('StaticSummonerSpell', summonerSpellSchema);