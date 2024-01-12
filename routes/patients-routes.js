const router = require('express').Router();
const User = require('../models/patients');


router.post('/patients-registration', (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,
        phone: req.body.phone,
        state: req.body.state,
        zip: req.body.zip,
        city: req.body.city,
        email: req.body.email,
    
    })
    user.save()
        .then(() => {
            res.json({ sucess: true, message: "Patients Registation done" });
        })
        .catch((err) => {
            if (err.code === 11000) {
                return res.json({ sucess: false, message: "email already exist" })
            }
            res.json({
                sucess: false,
                message: "authentication failed",
            });
        });
})



module.exports = router;