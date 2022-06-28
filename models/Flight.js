const mongoose = require('mongoose');

const FlightSchema = mongoose.Schema({
        title: {
            type: 'string',
            required: true
        },
    time: {
          type: 'date',
        },
    price: {
           type: 'Number',
            required: true
        }
    },
{timestamps:true}
    )


module.exports = mongoose.model("Flight", FlightSchema)