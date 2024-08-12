const express = require('express');
const JobApplication = require('../models/jobApplication');
const router = express.Router();

// Route to handle job application submissions
router.post('/apply', async (req, res) => {
  try {
    const { name, email, phone, dob, resume, jobTitle } = req.body;

    // Create a new job application record
    const newApplication = new JobApplication({
      name,
      email,
      phone,
      dob,
      resume,
      jobTitle
    });

    // Save to the database
    await newApplication.save();

    res.status(201).json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting application.' });
  }
});

module.exports = router;