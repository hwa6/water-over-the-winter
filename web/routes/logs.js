const express = require('express');
const router = express.Router();
const { Log } = require('../models/Models');

//get all logs. return JSON data
router.get('/', function (req, res, next) {
  Log.find({}, { _id: 0, __v: 0 }, function (err, allLogs) {
    if (err) {
      return res.status(400).send('Error with get');
    } else {
      res.status(201).send(allLogs);
    }
  });
});

//delete all logs to remove clutter.
router.delete('/', function (req, res, next) {
  Log.remove({}, function (err, success) {
    if (err) {
      return res.status(400).send('Error with delete');
    } else {
      res.status(201).send('Succesful delete');
    }
  });
});

module.exports = router;
