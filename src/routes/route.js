const express = require('express')
const route = express.Router()
const { addRation, getInventory, deleteRationById } = require('../controllers/rationController')
const { createSchedule, getSchedule } = require('../controllers/scheduleController')

route.get('/test', (req, res) => {
    res.send('test')
})

route.post('/addRation', addRation)

route.get('/getInventory', getInventory)

route.delete('/delete/:id', deleteRationById)

route.post('/createschedule', createSchedule)

route.get('/getschedule', getSchedule)

module.exports = route
