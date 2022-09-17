const rationModel = require('../models/rationModel')

const addRation = async (req, res) => {
    try {
        let body = req.body

        let pakage = body.Packet_Type
        if (!pakage) res.status(400).send({ status: false, message: 'please provide packet type' })

        if (pakage == 'Food') {
            let date = body.Expiry_Date
            let validateDate = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/gm
            if (!validateDate.test(date)) {
                return res.status(400).send({ status: false, message: "date must be in format  YYYY-MM-DD!!!" })
            }
        }

        let data = await rationModel.create(body)

        res.status(201).send({ message: 'Successfully added', data: data });
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const getInventory = async (req, res) => {
    try {
        let food = await rationModel.find({ isDeleted: false, Packet_Type: "Food" }).sort({ Expiry_Date: 1 })
        if (food.length == 0) return res.status(404).send({ status: false, message: 'no food packet items availaible' })

        let water = await rationModel.find({ isDeleted: false, Packet_Type: "Water" })
        if (water.length == 0) return res.status(404).send({ status: false, message: 'no water packet items availaible' })

        res.status(200).send({ message: 'Inventory data', foodData: food, waterData: water })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const deleteRationById = async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) res.status(400).send({ status: false, message: 'please enter thr id' })

        let packet = await rationModel.findOneAndUpdate({ _id: id, isDeleted: false }, { isDeleted: true }, { new: true })
        if (!packet) res.status(404).send({ status: false, message: 'item already deleted or is not present in database' })

        res.status(200).send({ status: "success", message: 'successfully deleted' })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { addRation, getInventory, deleteRationById }