const router = require('express').Router();

const controller = require('../controllers/flightController');

// router.get('/', controller.example)

//add flight routes
router.post('/', controller.addFLight)

//get all flight
router.get("/", controller.getFlights)

//delete flight
router.delete('/', controller.deleteFlight)


module.exports = router;

