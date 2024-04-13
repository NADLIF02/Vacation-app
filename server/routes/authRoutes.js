// server/routes/authRoutes.js
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send('Authentication failed');
    }
    const token = jwt.sign({ userId: user._id }, 'YOUR_SECRET_KEY', { expiresIn: '1d' });
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
