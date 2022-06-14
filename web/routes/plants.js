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
      res.status(201).send(allPlants);
    }
  });
});

//get an individual plant. return JSON data
router.get('/:id', function (req, res, next) {
  Plant.find({ id: req.params.id }, { _id: 0, __v: 0 }, function (err, plant) {
    if (err) {
      return res.status(400).send('Error with get');
    } else {
      res.status(201).send(plant);
    }
  });
});

//update a plant threshold.
router.put('/:id', function (req, res, next) {
  //find plant with desired id
  Plant.find({ id: req.params.id }, function (err, searchResult) {
    if (searchResult[0] === undefined) {
      res
        .status(400)
        .send(
          'Plant ID number is invalid. Acceptable inputs are 0, 1, 2, and 3.'
        );
    } else if (req.body.threshold < 0 || req.body.threshold > 100) {
      res
        .status(400)
        .send('Threshold value is invalid. Acceptable inputs are 0-100.');
    } else {
      let filter = { id: req.params.id };
      let update = {};
      update.threshold = req.body.threshold;
      Plant.findOneAndUpdate(filter, update, function (err, success) {
        if (err) {
          res.status(400).send('Error updating');
        } else {
          res.status(201).send('Successful Update');
        }
      });
    }
  });
});

module.exports = router;
