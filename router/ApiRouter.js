const express = require('express')
const { user, allUser, singleUser, removeUser, updateUser } = require('../controller/ApiController')
const Route = express.Router()

Route.post('/user', user)
Route.get('/allUser', allUser)
Route.post('/allUser/single/:_id', singleUser)
Route.post('/allUser/remove/:_id', removeUser)
Route.post('/allUser/update/:_id', updateUser)
module.exports = Route