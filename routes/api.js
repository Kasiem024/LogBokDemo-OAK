var express = require('express');
var router = express.Router();

router.get('/users', (req, res) => {
    var data = require('../data/users.json')
    res.send(data)
});

router.get('/bookingsList', (req, res) => {
    var data = require('../data/bookingsList.json')
    res.send(data)
});

module.exports = router;