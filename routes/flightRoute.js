const router = require('express').Router();

const controller = require('../controllers/flightController');

// router.get('/', controller.example)

//add flight routes
router.post('/', controller.addFLight)

//update flight
router.put('/:id', controller.updateFlight)

//get all flight
router.get("/", controller.getFlights)

//get single flight
router.get("/:id", controller.getFlightById)

// delete flight
router.delete('/:id', controller.deleteFlight)


module.exports = router;

