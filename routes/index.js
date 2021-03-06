const express = require('express');
const router = express.Router();
const fs = require('fs');

// TODO
// Separera klienten och servern mer
// Fler saker ska hända på server sidan
// När en användare vill logga in ska både GET och POST användas
// Responsen blir en JA eller NEJ
// Kan ha en bool i users.json, TRUE vid log in FALSE vid log ut
// Detta leder till mer säkerhet
// Två route filer

router.get('/', (req, res) => res.render('login'));

router.get('/bookings', (req, res) => res.render('bookings'));

module.exports = router;