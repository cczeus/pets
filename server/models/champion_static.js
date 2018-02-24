const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const championSchema = new Schema({
    id:         { type: Number, unique: true },
    title:      String,
    key:        String,
    name:       String,
    partype:    String,
    lore:       String,
    blurb:      String,
    allyTips:   [String],
    enemyTips:  [String],
    tags:       [String],
    skins: [{
        id:   Number,
        name: String,
        num:  Number
    }],
    info: {
        attack:     Number,
        defense:    Number,
        magic:      Number,
        difficulty: Number
    },
    image: {
        full:   String,
        group:  String,
        sprite: String,
        h:      Number,
        w:      Number,
        y:      Number,
        x:      Number
    },
    stats: {
        armor:                Number,
        armorperlevel:        Number,
        attackdamage:         Number,
        attackdamageperlevel: Number,
        attackrange:          Number,
        attackspeedoffset:    Number,
        attackspeedperlevel:  Number,
        crit:                 Number,
        critperlevel:         Number,
        hp:                   Number,
        hpperlevel:           Number,
        hpregen:              Number,
        hpregenperlevel:      Number,
        movespeed:            Number,
        mp:                   Number,
        mpperlevel:           Number,
        mpregen:              Number,
        mpregenperlevel:      Number,
        spellblock:           Number,
        spellblockperlevel:   Number
    },
    passive: {
        name:                 String,
        description:          String,
        sanitizedDescription: String,
        image: {
            full:   String,
            sprite: String,
            group:  String,
            x:      Number,
            y:      Number,
            w:      Number,
            h:      Number
        }
    },
    spells: [{
        name:                 String,
        description:          String,
        sanitizedDescription: String,
        tooltip:              String,
        sanitizedTooltip:     String,
        resource:             String,
        maxrank:              Number,
        rangeBurn:            String,
        key:                  String,
        cost:                 [Number],
        costType:             String,
        costBurn:             String,
        cooldown:             [Number],
        cooldownBurn:         String,
        range:                [Number],
        effect:               [[Number]],
        effectBurn:           [String],
        leveltip: {
            label:  [String],
            effect: [String]
        },
        vars: [{
            key:    String,
            link:   String,
            coeff:  [Number]
        }],
        image: {
            full:   String,
            sprite: String,
            group:  String,
            x:      Number,
            y:      Number,
            w:      Number,
            h:      Number
        }
    }]
});

module.exports = mongoose.model('StaticChampion', championSchema);