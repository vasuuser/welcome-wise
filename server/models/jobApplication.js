const mongoose = require('mongoose');

const JobApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  resume: { type: String, required: true }, // Assuming you're storing the resume as a file path
  jobTitle: { type: String, required: true },
  submissionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobApplication', JobApplicationSchema);