const express = require('express');
const router = express.Router();
const Flight = require("../models/Flight")



const controller = require('../controllers/flightController');

// router.get('/', controller.example)

//add flight routes
router.post('/api/flights', controller.addFLight)

//get a flight
router.get('/', controller.getFlight)

//delete flight
router.delete('/', controller.deleteFlight)


module.exports = router;

