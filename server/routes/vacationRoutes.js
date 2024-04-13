const express = require('express');
const router = express.Router();
const { checkAuth } = require('../authMiddleware');
const Vacation = require('../models/Vacation');

// Route pour obtenir les congés
router.get('/', checkAuth, async (req, res) => {
    try {
        const vacations = await Vacation.find();
        res.json(vacations);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Route pour créer un nouveau congé
router.post('/', checkAuth, async (req, res) => {
    try {
        const newVacation = new Vacation(req.body);
        await newVacation.save();
        res.status(201).send(newVacation);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
