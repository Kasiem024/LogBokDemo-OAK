const express = require('express');
const router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/login', (req, res) => res.render('login'));

router.get('/bookings', (req, res) => res.render('bookings'));


router.post('/', (req, res) => {

});

router.get('/users', (req, res) => {
    // let obj = [{
    //     make: "Volvo0",
    //     model: "V60"
    // }, {
    //     make: "Volvo1",
    //     model: "V60"
    // }, {
    //     make: "Volvo2",
    //     model: "V60"
    // }, {
    //     make: "Volvo3",
    //     model: "V60"
    // }];
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(obj));

    fs.readFile('../data/users.json', (err, data) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});

module.exports = router;