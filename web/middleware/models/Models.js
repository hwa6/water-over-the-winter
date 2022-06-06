const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const plantSchema = new mongoose.Schema({
  id: { type: Number },
  threshold: { type: Number },
  moisture_level: { type: Number },
  in_use: { type: Boolean },
});

const Plant = mongoose.model('Plant', plantSchema);

const logSchema = new mongoose.Schema({
  message: { type: String },
  Date: { type: Date, default: Date.now, required: false },
});

const Log = mongoose.model('Log', logSchema);

module.exports = { Plant, Log };
