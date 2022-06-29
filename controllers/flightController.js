const {Flights} = require('../models/Flight')
const {v4: uuid} = require("uuid")

exports.addFLight = async (req, res) => {
    try {
        const {title, time, price, date} = await req.body;
        const newFlight = {
                id: uuid(),
                title,
                time,
                price,
                date
            }
        // flight.id = uuid
        Flights.push(newFlight);
        res.status(201).json({
            message: "Flight booked",
            flights: newFlight
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
        let id = req.params.id
        const flight = await Flights.find((flight) => flight.id === id);
        res.status(200).json({
                message: "flight found",
                flight
            })
    }catch (err) {
        res.status(500).json(err);
    }
}

exports.updateFlight = async (req, res) => {
    try {
        let id =req.params.id;
        const flight = await Flights.find((flight) => flight.id === id);
        const {title, time, price, date} = await req.body;
        flight.title = title;
        flight.time = time;
        flight.price = price;
        flight.date = date;
        res.status(200).json({
            message: "flight updated",
            flight
        })
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteFlight = async (req, res) => {
    try {
        let id = req.params.id;
        const flight = await Flights.find((flight) => flight.id === id);
        Flights.splice(Flights.indexOf((flight), 1))
        res.status(200).json({
            message: "flight deleted",
            flight
        })
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}
