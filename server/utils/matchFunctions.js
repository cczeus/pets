const _ = require('lodash');
const championIds = require('../library/StaticData/championIds');
const Champion = require('./championFunctions');

const theLanes = ['TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'];
const fields = ['gamesPlayed', 'wins', 'kills', 'deaths', 'assists'];

function getAggregateMatchData(rankedGames, accountId) {
	const data = initializeData();
	var championsData = data.championStats;
	var lanes = data.lanes;
	const aggregateData = _.map(rankedGames, rankedGame => {
		const participantIdentities = rankedGame.participantIdentities;
    	const player = getParticipantByAccountId(participantIdentities, accountId);
    	const [playerData] = _.filter(rankedGame.participants, participant => {
    		return participant.participantId === player.participantId;
    	});

    	playerData.stats.win = gameResultToInt(playerData.stats);
        if(playerData.timeline.role === 'DUO_SUPPORT' || playerData.timeline.role === 'DUO_CARRY') {
        	lanes[playerData.timeline.role].gamesPlayed += 1;
    		lanes[playerData.timeline.role].wins += playerData.stats.win;
        } else if(playerData.timeline.role === 'DUO') {
        	lanes['DUO_CARRY'].gamesPlayed += 1;
    		lanes['DUO_CARRY'].wins += playerData.stats.win;
        } else if(playerData.timeline.role === 'SOLO' && playerData.timeline.lane === 'BOTTOM') {
        	lanes['DUO_CARRY'].gamesPlayed += 1;
    		lanes['DUO_CARRY'].wins += playerData.stats.win;
        }
        else {
    		lanes[playerData.timeline.lane].gamesPlayed += 1;
    		lanes[playerData.timeline.lane].wins += playerData.stats.win;
    	}
    	championsData[playerData.championId] = appendData(championsData, playerData);
    	return championsData;
    });
    return data;
}
function getParticipantByAccountId(participantIdentities, accountId) {
	const [playerByAccountId] = _.filter(participantIdentities, identity => {
		return identity.player.currentAccountId === accountId;
	});
	return playerByAccountId;
}


/**************************************************************************************************
									HELPERS
**************************************************************************************************/
function appendData(championsData, playerData) {
	championData = championsData[playerData.championId];
    championData.championId = playerData.championId;
	championData.gamesPlayed += 1;
	championData.wins += playerData.stats.win;
	_.map(fields, field => {
		field === 'gamesPlayed' || field === 'wins' ? null : championData[field] = appendField(championData, playerData.stats, field);
	})
	return championData;
}
function appendField(championData, playerData, property) {
	if (championData[property] === null || championData[property] === undefined) {
		championData[property] = playerData[property];
	} else {
		championData[property] += playerData[property]
	}
	return championData[property];
}
function gameResultToInt(data) {
	return data.win === true ? 1 : 0;
}
function initializeData() {
	var data = {};
	data.championStats = {};
	data.lanes = {};
	_.map(championIds, championId => {
		data.championStats[championId] = {};
		data.championStats[championId].id = championId;
		data.championStats[championId].name = Champion.getChampionNameById(championId); 
		data.championStats[championId].image = Champion.getChampionImageById(championId);
		 _.map(fields, field => {
        	data.championStats[championId][field] = 0;
		});
	});
	_.map(theLanes, lane => {
	   data.lanes[lane] = {};
	   data.lanes[lane].lane = lane;
	   data.lanes[lane].gamesPlayed = 0;
       data.lanes[lane].wins = 0;
	});
	return data;
}

module.exports = { getAggregateMatchData, getParticipantByAccountId };
