// server/routes/authRoutes.js
const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Assurez-vous d'installer bcryptjs si ce n'est pas déjà fait

const router = express.Router();

// Méthode pour se connecter
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    // Trouver l'utilisateur par son nom d'utilisateur
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. User not found.' });
    }
    // Comparer le mot de passe fourni avec celui enregistré
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Authentication failed. Wrong password.' });
    }
    // Création du token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, userId: user._id, username: user.username });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
