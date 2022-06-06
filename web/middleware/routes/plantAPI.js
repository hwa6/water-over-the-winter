const express = require('express');
const router = express.Router();
const { Plant } = require('../models/Models');
const { Log } = require('../models/Models');

//get all plants. return JSON data
router.get('/', function (req, res, next) {
  Plant.find({}, { _id: 0, __v: 0 }, function (err, allPlants) {
    if (err) {
      return res.status(400).send('Error with get');
    } else {
      res.status(203).send(allPlants);
    }
  });
});

module.exports = router;
