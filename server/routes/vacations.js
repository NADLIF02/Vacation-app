const router = require('express').Router();
let Vacation = require('../models/Vacation');

router.route('/').get((req, res) => {
  Vacation.find()
    .then(vacations => res.json(vacations))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const startDate = Date.parse(req.body.startDate);
  const endDate = Date.parse(req.body.endDate);

  const newVacation = new Vacation({
    username,
    startDate,
    endDate
  });

  newVacation.save()
    .then(() => res.json('Vacation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
