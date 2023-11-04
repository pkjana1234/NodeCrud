const User = require('../model/userModel')

const fethData = async (req, res) => {
    try {
        const allData = await User.find()
        res.render("home", {
            data: allData
        })
        console.log(allData);
    } catch (e) {
        console.log(e);
    }
}
const addData = async (req, res) => {
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
        console.log(data);
        if (data) {
            res.redirect('/')
            return;
        }
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
        if (singleData) {
            res.render("editdata", {
                title: "editdata Page",
                data: singleData
            })
            return;
        }
        return res.status(200).json({
            success: true,
            message: "Single Data Fetched Successfully",
            data: singleData
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
        if (updated) {
            res.redirect('/')
            return;
        }
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
const remove = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    try {
        const singleDatadel = await User.deleteOne({
            "_id": req.params._id
        })
        if (singleDatadel) {
            res.redirect('/')
            return;
        }
        return res.status(200).json({
            success: true,
            message: "Single Data Deleted Successfully",
            // singleDatadel
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        })
    }
}
const adduserpage = (req, res) => {
    res.render("adddata", {
        title: "adddata Page"
    })
}

module.exports = {
    addData,
    fethData,
    adduserpage,
    remove,
    singleUser,
    updateUser
}