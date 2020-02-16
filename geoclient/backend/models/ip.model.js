const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ipSchema = new Schema({
  ip: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const IP = mongoose.model('IP', ipSchema);

module.exports = IP;