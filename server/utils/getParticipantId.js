const _ = require('lodash');

function getParticipantByAccountId(participantIdentities, accountId) {
	const playerByAccountId = _.filter(participantIdentities, identity => {
		return identity.player.accountId === accountId;
	});
	return playerByAccountId[0];
}
module.exports = getParticipantByAccountId;