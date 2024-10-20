const {ensureAuthentication} = require("../Middlewares/Auth");

const router = require("express").Router();

router.get("/", ensureAuthentication, (req, res) => {
    console.log("logged in user details", req.user);
    res.status(200).json(
        {
            user: "User Information", 
            trip: "Trip Information",
            success: true
        }
    );
})

module.exports = router;
