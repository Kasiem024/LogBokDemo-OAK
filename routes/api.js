var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', (req, res) => res.render('login'));

router.get('/bookings', (req, res) => res.render('bookings'));


router.post('/', (req, res) => {

});

module.exports = router;