const kindred = require('kindred-api');
const _ = require('lodash');
const config = require('../config/config');
const Champion = require('../models/champion_static');
const Item = require('../models/item_static');
const Map = require('../models/map_static');
const ProfileIcon = require('../models/profile_icon_static');
const SummonerSpell = require('../models/summoner_spell_static');

const k = new kindred.Kindred({
    key: config.RIOT_API_DEV,
    limits: kindred.LIMITS.DEV,
    spread: true, // setting spread to true will help prevent timeout/econreset errors
    debug: true,
    timeout: 100000
});

function generateChampionList() {
    k.Static.Champion.list( { tags: 'all' } ).then(function(data) {
        _.map(data.data, champion => {
            Champion.findOneAndUpdate( { id: champion.id }, champion, { upsert: true }, function(err) {
                if (err) {
                    console.error('Failure Saving Champion ' + champion.name); // eslint-disable-line no-console
                    throw err;
                }
            });
        });
    });
}

function generateSummonerSpellList() {
    k.Static.SummonerSpell.list({ tags: 'all' }).then(function(data) {
        _.map(data.data, spell => {
            SummonerSpell.findOneAndUpdate({ id: spell.id }, spell, { upsert: true }, function(err) {
                if (err) {
                    console.error('Failure Saving Spell ' + spell.name); // eslint-disable-line no-console
                    throw err;
                }
            });
        });
    });
}

function generateItemsList() {
    k.Static.Item.list({ tags: 'all' }).then(function(data) {
        _.map(data.data, item => {
            item.maps = _.transform(item.maps, function(result, value, key) {
                result.push({
                    map: key,
                    purchasable: value
                });
            }, []);
            item.stats = _.transform(item.stats, function(result, value, key) {
                result.push({
                    name: key,
                    value: value
                });
            }, []);
            Item.findOneAndUpdate( { id: item.id }, item, { upsert: true }, function(err) {
                if (err) {
                    console.error('Failure Saving Item ' + item.name); // eslint-disable-line no-console
                    throw err;
                }
            });
        });
    });
}

function generateMapList() {
    k.Static.Map.list().then(function(data) {
        _.map(data.data, map => {
            Map.findOneAndUpdate( { mapId: map.mapId }, map, { upsert: true }, function(err) {
                if (err) {
                    console.error('Failure Saving Map ' + map.mapName); // eslint-disable-line no-console
                    throw err;
                }
            });
        });
    });
}

function generateProfileIconList() {
    k.Static.ProfileIcon.list().then(function(data) {
        _.map(data.data, icon => {
            ProfileIcon.findOneAndUpdate( { id: icon.id }, icon, { upsert: true }, function(err) {
                if (err) {
                    console.error('Failure Saving Profile Icon ' + icon.id); // eslint-disable-line no-console
                    throw err;
                }
            });
        });
    });
}

module.exports = { generateChampionList, generateSummonerSpellList, generateItemsList, generateMapList, generateProfileIconList };