const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vacationSchema = new Schema({
  username: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, default: 'Pending' }
}, {
  timestamps: true,
});

const Vacation = mongoose.model('Vacation', vacationSchema);

module.exports = Vacation;
