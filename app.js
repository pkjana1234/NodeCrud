const express = require("express")
const ejs = require("ejs")
const path = require("path")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
var cors = require('cors')

const app = express()


app.set("view engine", 'ejs')
app.set('views', 'view')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors()) // Use this after the variable declaration
app.use(express.static(path.join(__dirname, 'public')))

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const UserRouter = require("./router/userRouter")
app.use(UserRouter)
//Api ROutes
const ApiRoute = require('./router/ApiRouter')
app.use('/api', ApiRoute)
const port = 12345
const dbDriver = "mongodb+srv://pradiptajana1234:mub0w0tVL4cKFTmB@cluster0.pmf4ti6.mongodb.net/Node"
mongoose.connect(dbDriver, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        app.listen(port, () => {
            console.log(`server running port : http://localhost:${port}`);
            console.log(`Db connected successfully`);
        })
    }).catch(error => {
        console.log(error);
    })


