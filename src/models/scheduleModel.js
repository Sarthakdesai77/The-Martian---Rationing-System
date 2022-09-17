const mongoose = require('mongoose')

const scheduleSchema = new mongoose.Schema({

    scheduleDate: Date,
    foodPacket: [Object],
    waterPacket: [Object],

}, { versionKey: false })

module.exports = mongoose.model('schedule', scheduleSchema)