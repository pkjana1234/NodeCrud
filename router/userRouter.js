const express = require("express")
const { Home, fethData, addData, adduserpage, remove, singleUser, updateUser } = require("../controller/userController")
const Route = express.Router()

// Route.get('/', Home)
Route.get('/', fethData)
Route.get('/user', adduserpage)
Route.post('/adduser', addData)
Route.get('/fetchsingleuser/:_id', singleUser)
Route.post('/updatesingleuser/:_id', updateUser)
Route.get('/removeuser/:_id', remove)
module.exports = Route