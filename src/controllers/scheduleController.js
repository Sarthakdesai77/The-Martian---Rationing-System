const scheduleModel = require('../models/scheduleModel')
const rationModel = require('../models/rationModel');

const createSchedule = async (req, res) => {

    try {
        let date = req.body.date;
        if (!date) res.status(400).send({ status: false, message: 'please enter the date' })
        let validateDate = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/gm
        if (!validateDate.test(date)) {
            return res.status(400).send({ status: false, message: "date must be in format  YYYY-MM-DD!!!" })
        }
        let checkDate = await scheduleModel.findOne({ scheduleDate: date })
        if (checkDate) return res.status(400).send({ status: false, message: 'date already exists' })

        let foodPacket = [];
        let waterPacket = [];

        let foodData = await rationModel.find({ Packet_Type: 'Food', isDeleted: false }).sort({ Expiry_Date: 1 })

        let waterData = await rationModel.find({ Packet_Type: 'Water', isDeleted: false })

        let i = 0;
        let sum = 0;

        while (i < waterData.length) {
            if (sum < 2) {
                sum = sum + waterData[i].Quantity_in_Litres
                waterPacket.push(waterData[i])
                await rationModel.findOneAndUpdate({ Packet_Type: 'Water', _id: waterData[i]._id }, { isDeleted: true }, { new: true })
                i++
            } else {
                break;
            }
        }
        let j = 0;
        let sumF = 0;

        while (j < foodData.length) {
            if (sumF < 2500) {
                sumF = sumF + foodData[j].Calories
                foodPacket.push(foodData[j])
                await rationModel.findOneAndUpdate({ Packet_Type: 'Food', _id: foodData[j]._id }, { isDeleted: true }, { new: true })
                j++
            } else {
                break;
            }
        }

        let obj = {
            scheduleDate: date,
            foodPacket: foodPacket,
            waterPacket: waterPacket,
        }

        if (foodPacket.length != 0 && waterPacket.length != 0) {
            let result = await scheduleModel.create(obj)
            res.status(201).send(result)
        } else {
            return res.status(400).send({ status: false, message: 'resources have exhausted' })
        }
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


const getSchedule = async (req, res) => {

    try {
        let schedule = await scheduleModel.find();
        let date = new Date().toLocaleDateString()
        let days = schedule.length

        res.status(200).send({ startDate: date, schedule: schedule, totalDays: days })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}


module.exports = { createSchedule, getSchedule }