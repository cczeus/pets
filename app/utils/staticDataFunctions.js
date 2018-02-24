import _ from 'lodash';
import StaticChampionData from '../library/StaticData/champions';
import StaticSummonerSpellData from '../library/StaticData/summonerSpells';
import StaticSummonerItemData from '../library/StaticData/items';

export function getChampionById(id) {
  const champion = _.filter(StaticChampionData.data, champion => {
    return champion.id === id;
  })
  return champion;
}
export function getChampionByIds(ids) {
  const champions = _.filter(StaticChampionData.data, champion => {
    return _.includes(ids, champion.id);
  })
  return champions;
}

export function getSummonerSpellById(id) {
  const spell = _.filter(StaticSummonerSpellData.data, spell => {
    return spell.id === id;
  })
  return spell;
}

export function getItemsByIds(ids) {
  const items = _.filter(StaticSummonerItemData.data, item => {
    return _.includes(ids, item.id);
  })
  return items;
}