const _ = require('lodash');
const Champions = require('../library/StaticData/champions');

function getChampionById(championId) {
    const [champion] = _.filter(Champions.data, Champion => {
        return Champion.id === championId;
    });
    return champion;
}
function getChampionNameById(championId) {
    const [champion] = _.filter(Champions.data, Champion => {
        return Champion.id === championId;
    });
    return champion.name;
}
function getChampionImageById(championId) {
    const [champion] = _.filter(Champions.data, Champion => {
        return Champion.id === championId;
    });
    return champion.image.full;
}
function calculateKDA(champion) {
    return champion.deaths === 0 ? (champion.kills + champion.assists).toFixed(1) : (champion.kills + champion.assists / champion.deaths).toFixed(1);
}
function calculateWinPercentage(champion) {
    return champion.wins === 0 || champion.gamesPlayed === 0 ? 0 : (champion.wins / champion.gamesPlayed) * 100;
}

function calculateMetaData(data, championMastery) {
    _.map(data, champion => {
        champion.winPercentage = calculateWinPercentage(champion);
        champion.KDA = calculateKDA(champion);
        const [mastery] = _.filter(championMastery, mastery => { 
            return mastery.championId === champion.id; 
        });
        champion.championPoints = mastery ? mastery.championPoints : 0;
    });
    return data;
}
module.exports = { getChampionById, getChampionNameById, getChampionImageById, calculateKDA, calculateWinPercentage, calculateMetaData };