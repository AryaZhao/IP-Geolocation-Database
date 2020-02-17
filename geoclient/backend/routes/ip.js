const router = require('express').Router();
let IP = require('../models/ip.model');

router.route('/').get((req, res) => {
  IP.find()
    .then(ip => res.json(ip))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:date').get((req, res) => {
  IP.find({date : req.params.date})
    .then(ip => res.json(ip))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/last/:number').get((req, res) => {
  IP.find()
    .sort({createdAt: -1})
    .limit(Number(req.params.number))
    .then(ip => res.json(ip))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const ip = req.body.ip;
  const city = req.body.city;
  const zip = Number(req.body.zip);
  const date = Date.parse(req.body.date);

  const newIP = new IP({
    ip,
    city,
    zip,
    date,
  });

  newIP.save()
  .then(() => res.json('IP added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;