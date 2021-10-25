const express = require('express');
const router = express.Router();
const fs = require('fs');



/* GET home page. */
router.get('/login', (req, res) => res.render('login'));

router.get('/bookings', (req, res) => res.render('bookings'));


router.post('/', (req, res) => {

});

router.get('/users', (req, res) => {
    var data = require('../data/users.json')
    res.send(data)
});

router.get('/bookingsList', (req, res) => {
    var data = require('../data/bookingsList.json')
    res.send(data)
});

module.exports = router;