const express = require('express');
const router = express.Router();
const _ = require('lodash');
const kindred = require('kindred-api');
const QUEUE_TYPES = kindred.QUEUE_TYPES;
const QUEUE_STRINGS = kindred.QUEUE_STRINGS;

const Match = require('../utils/matchFunctions');
const Champion = require('../utils/championFunctions');
const clean = require('../utils/cleanData.js');
const StaticData = require('../utils/generateStaticData');
const config = require('../config/config');
const Summoner = require('../models/summoner');

const k = new kindred.Kindred({
    key: config.RIOT_API_DEV,
    limits: kindred.LIMITS.DEV,
    spread: false, // setting spread to true will help prevent timeout/econreset errors
    debug: true,
    timeout: 100000
});

router.get('/generateStaticData', function(req, res) {
    StaticData.generateChampionList();
    StaticData.generateItemsList();
    StaticData.generateSummonerSpellList();
    StaticData.generateMapList();
    StaticData.generateProfileIconList();
    res.send('Request Received');
});

router.get('/:region/live/:summonerId', function(req, res) {
    const sid = parseInt(req.params.summonerId);
    let live = {};
    let requestCount = 0;
    
    k.CurrentGame.get({ id: sid }).then(function(data) {
        live = data;
        _.map(live.participants, player => {
            requestCount++;
            k.League.positions({ id: player.summonerId }).then(function(data) {
                let rank = _.find(data, { 'queueType': 'RANKED_SOLO_5x5'});
                player.rank = rank.tier + '_' + rank.rank;
                done();
            }).catch(function(reason) {
                res.statusCode = reason;
                res.json({'statusCode': res.statusCode});
            });
        });
    }).catch(function(reason) {
        res.statusCode = reason;
        res.json({'statusCode': res.statusCode});
    });

    function done() {
        if(--requestCount == 0) {
            res.json(live);
        }
    }
});

router.get('/:region/summoner/:summonerName', function(req, res) {
    const name = req.params.summonerName;
    let summ = {};
    let requestCount = 5;

   
    k.Summoner.by.name(name).then(function(data) {
        summ.summoner = data;
        const id = data.id;
        const accountId = data.accountId;

        k.ChampionMastery.all({id: id}).then(function(data) {
            summ.championMastery = data;
            done();
        }).catch(function (reason) {
            res.statusCode = reason;
            res.json({'statusCode': res.statusCode});
        });

        k.ChampionMastery.totalScore({id: id}).then(function(data) {
            summ.totalMastery = data;
            done();
        }).catch(function (reason) {
            res.statusCode = reason;
            res.json({'statusCode': res.statusCode});
        });

        k.League.positions({id: id}).then(function(data) {
            summ.ranks = data;
            done();
        }).catch(function (reason) {
            res.statusCode = reason;
            res.json({'statusCode': res.statusCode});
        });

        const rankedOptions = {queue: [QUEUE_TYPES.RANKED_SOLO_5x5, QUEUE_TYPES.RANKED_FLEX_SR, 470]};
        const currentSeason = 10;
        k.Matchlist.by.account(accountId, rankedOptions).then(function(data) {
           
            const seasonMatches = data.matches;
            let ranked = [];
            let count = 3;
            //let count = seasonMatches.length; 
            requestCount += 3;
            //requestCount += seasonMatches.length;
            for(let i = 0; i < 3; i++) { // i < seasonMatches.length
                if(seasonMatches[i] !== null) {
                k.Match.by.id(seasonMatches[i].gameId, { forAccountId: accountId }).then(function(data) {
                    ranked.push(data);
                    if(--count == 0) {
                        var aggregateData = Match.getAggregateMatchData(ranked, accountId);
                        // TODO: Only calculate stats for the user's top 5 champions and store the info together
                        var championStats = Champion.calculateMetaData(aggregateData.championStats, summ.championMastery);
                        championStats = _.sortBy(championStats, 'gamesPlayed').reverse();
                        summ.championStats = championStats;
                        summ.lanes = aggregateData.lanes;
                    }
                    done();
                }).catch(function (reason) {
                    res.statusCode = reason;
                    res.json({'statusCode': res.statusCode});
                });
            }
            }

            summ.rankedMatches = data;
            done();
        });

        k.Matchlist.recent({ accountId: accountId }).then(function(data) {
            summ.recentMatches = data;
            summ.detailedRecentMatches = [];
            requestCount += 2;
            for (let i = 0; i < 2; i++) {
                k.Match.by.id(data.matches[i].gameId, { forAccountId: accountId }).then(function(data) {
                    summ.detailedRecentMatches.push(data);
                    done();
                });
            }
            done();
        }).catch(function (reason) {
            res.statusCode = reason;
            res.json({'statusCode': res.statusCode});
        });
    }).catch(function (reason) {
        res.statusCode = reason;
        res.json({'statusCode': res.statusCode});
    });

    function done() {
        if(--requestCount === 0) {
            console.log('Requests Finished');
            summ = clean.summonerOverview(summ);
            var s = new Summoner();
            s.name = summ.summoner.name;
            s.save(function (err) {
                if (!err) console.log('Success Saving!');
            });
            res.json(summ);
        }
    }
});

module.exports = router;
