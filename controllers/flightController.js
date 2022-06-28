const {Flights} = require('../models/Flight')


exports.addFLight = async (req, res) => {
    try {
        const flight = await req.body;
        Flights.push(flight);
        res.status(201).json({
            message: "Flight booked",
            flights: flight
        })
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}

//get all flights
exports.getFlights = async (req, res)=> {
    try {
        const flights = await Flights;
        res.status(200).json({
                message: "All flight",
                flights: flights
            })
    }catch (err) {
        res.status(500).json({message: err.message});
    }
}


exports.getFlightById = async (req, res)=> {
    try {
        const post = await Flights.findById(res.params.id);
        res.status(200).json(post)
    }catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteFlight = (req, res, next) => {

}
