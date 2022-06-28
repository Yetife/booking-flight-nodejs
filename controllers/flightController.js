const Flight = require('../models/Flight')


exports.addFLight = (req, res) => {
    console.log("flight added")
    res.send("Flight example")
}

exports.getFlight = async (req, res)=> {
    try {
        const post = await Flight.findById(res.params.id);
        res.status(200).json(post)
    }catch (err) {
        res.status(500).json(err);
    }
}

exports.deleteFlight = (req, res, next) => {

}
