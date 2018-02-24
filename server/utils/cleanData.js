const _ = require('lodash');
const QUEUE_STRINGS = require('kindred-api').QUEUE_STRINGS;
const QUEUE_TYPES = require('../library/StaticData/QueueTypes');

function summonerOverview(rawData) {

    // Clean Summoner Data
    let data = {};
    let properties = ['name', 'profileIconId', 'summonerLevel'];
    data.summoner = _.pick(rawData.summoner, properties);

    // Clean Rank Data
    properties = ['leagueName', 'tier', 'rank', 'leaguePoints', 'wins', 'losses'];
    data.ranks = {};
    // Convert ranks array to be keyed by queueType
    _.map(QUEUE_TYPES, QUEUE_TYPE => {
        const rankData = _.filter(rawData.ranks, { queueType: QUEUE_STRINGS[QUEUE_TYPE.queueType] });
        data.ranks[QUEUE_TYPE.queueType] = rankData.length === 0 ? { queueType: QUEUE_TYPE.name } : rankData;
    });

    // FIXME: Remove 1D Array and get working
    // data.ranks.RANKED_SOLO_5x5[0].queueType = 'Solo';
    // data.ranks.RANKED_FLEX_SR[0].queueType = 'Flex 5s';
    // data.ranks.RANKED_FLEX_TT[0].queueType = 'Flex 3s';

    // Merge then Clean ChampionMastery and ChampionStats
    data.champion = [];
    // TODO: Calculate losses
    properties = [
        'name',
        'image',
        'gamesPlayed',
        'wins',
        'kills',
        'deaths',
        'assists',
        'winPercentage',
        'KDA',
        'championLevel',
        'championPoints',
        'championId',
        'championPointsUntilNextLevel',
        'championPointsSinceLastLevel'
    ];
    let count = rawData.championMastery.length < 5 ? rawData.championMastery.length : 5;
    for(let i = 0; i < count; i++) {
        data.champion.push(_.pick(_.merge(rawData.championMastery[i], _.find(rawData.championStats, { 'id': rawData.championMastery[i].championId })), properties));
    }

    // Clean Matches
    data.matches = [];
    properties = ['seasonId', 'queueId', 'gameId', 'participantIdentities', 'gameVersion', 'platformId', 'mapId'];
    const keystones = [6161, 6162, 6164, 6261, 6262, 6263, 6361, 6362, 6363];
    _.map(rawData.detailedRecentMatches, match => {
        let matchData = {};
        matchData.participants = [];
        matchData.gameCreation = match.gameCreation;
        matchData.gameDuration = match.gameDuration;
        _.map(match.participants, participant => {
            let p = _.merge(participant, _.find(match.participantIdentities, { 'participantId': participant.participantId }).player);
            if(p.summonerId === rawData.summoner.id) {
                // FIXME: turn this into a _.merge(_.pick)
                matchData.win = p.stats.win;
                matchData.item0 = p.stats.item0;
                matchData.item1 = p.stats.item1;
                matchData.item2 = p.stats.item2;
                matchData.item3 = p.stats.item3;
                matchData.item4 = p.stats.item4;
                matchData.item5 = p.stats.item5;
                matchData.item6 = p.stats.item6;
                matchData.kills = p.stats.kills;
                matchData.deaths = p.stats.deaths;
                matchData.assists = p.stats.assists;
                matchData.cs = p.stats.totalMinionsKilled;
                matchData.gold = p.stats.goldEarned;
                matchData.spell1Id = p.spell1Id;
                matchData.spell2Id = p.spell2Id;
                matchData.championId = p.championId;
            }
            p.role = p.timeline.role;
            p.lane = p.timeline.lane;
            p.keystone = _.find(p.masteries, mastery => {
                return _.includes(keystones, mastery.id);
            });
            p = _.pick(p, ['teamId', 'championId', 'spell1Id', 'spell2Id', 'highestAchievedSeasonTier', 'summonerName', 'role', 'lane', 'keystone']);
            matchData.participants.push(p);
        });
        data.matches.push(_.omit(matchData, properties));
    });
    data.matches = _.sortBy(data.matches, function(o) { return -o.gameCreation; });


    // Include the following without cleaning
    data.totalMastery = rawData.totalMastery;
    data.lanes = rawData.lanes;

    return data;
}

module.exports.summonerOverview = summonerOverview;