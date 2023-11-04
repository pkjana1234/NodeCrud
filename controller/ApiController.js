const User = require('../model/userModel')


const user = async (req, res) => {
    // console.log(req.body);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try {
        const Udata = await new User({
            name: req.body.name,
            email: req.body.email,
            city: req.body.city,
            phone: req.body.phone,
            area: req.body.area
        })
        const data = await Udata.save()
        return res.status(200).json({
            success: true,
            message: "Data Added Successfully",
            data
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}
const allUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log(req.body);
    try {
        const allData = await User.find()
        return res.status(200).json({
            success: true,
            message: "Data Fetched Successfully",
            allData
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}
const singleUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log(req.body);
    try {
        const singleData = await User.findOne({
            "_id": req.params._id
        })
        // console.log(req.body, 'fefefef');
        // console.log(singleData, 'uuuuuu');
        return res.status(200).json({
            success: true,
            message: "Single Data Fetched Successfully",
            singleData
        })
    } catch (error) {
        return res.status(570).json({
            success: false,
            error
        })
    }
}
const updateUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log(req.body);
    try {
        const singleDataupdate = await User.findOne({
            "_id": req.params._id
        })
        const updated = await singleDataupdate.updateOne({
            name: req.body.name,
            email: req.body.email,
            city: req.body.city,
            phone: req.body.phone,
            area: req.body.area
        })
        // console.log(updated, 'fefefef');
        // console.log(singleData, 'uuuuuu');
        return res.status(200).json({
            success: true,
            message: "Data Updated Successfully",
            updated
        })
    } catch (error) {
        console.log(error); 
        return res.status(500).json({
            success: false,
        })
    }
}
const removeUser = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log(req.body);
    try {
        const singleDatadel = await User.deleteOne({
            "_id": req.params._id
        })
        // console.log(req.body, 'fefefef');
        // console.log(singleData, 'uuuuuu');
        return res.status(200).json({
            success: true,
            message: "Single Data Deleted Successfully",
            // singleDatadel
        })
    } catch (error) {
        return res.status(570).json({
            success: false,
            error
        })
    }
}


module.exports = {
    user,
    allUser,
    singleUser,
    removeUser,
    updateUser
}