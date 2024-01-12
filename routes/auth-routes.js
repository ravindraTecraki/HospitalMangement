const router = require('express').Router();
const User = require('../models/user');


router.post('/signup', (req, res) => {
    const user = new User({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        state: req.body.state,
        zip: req.body.zip,
        city: req.body.city,
        email: req.body.email,
        password: req.body.password
    })
    user.save()
        .then(() => {
            res.json({ sucess: true, message: "user accounr created" });
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