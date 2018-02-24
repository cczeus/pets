const _ = require('lodash');
const championIds = require('../library/championIds');
const getParticipantByAccountId = require('./getParticipantId');

function getAggregateChampionData(rankedGame, accountId) {
	const participantIdentities = rankedGame.participantIdentities;
    const player = getParticipantByAccountId(participantIdentities, accountId);
    const playerData = _.filter(rankedGame.participants, participant => {
    	return participant.participantId = player.participantId;
    });
}

module.exports = getAggregateChampionData;