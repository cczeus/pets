const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const summonerSchema = new Schema({
  name: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('Summoner', summonerSchema);