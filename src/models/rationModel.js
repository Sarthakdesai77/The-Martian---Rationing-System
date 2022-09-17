const mongoose = require('mongoose')

const rationSchema = new mongoose.Schema({
    Packet_Type: {
        type: String,
        enum: ['Food', 'Water']
    },
    Packet_Content: {
        type: String,
    },
    Calories: {
        type: Number,
        default: 0,
    },
    Expiry_Date: {
        type: Date,
    },
    Quantity_in_Litres: {
        type: Number,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
}, { versionKey: false })

module.exports = mongoose.model("ration", rationSchema)