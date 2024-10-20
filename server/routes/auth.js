const router = require("express").Router();
// const User = require("../models/User");

const { register, login } = require("../controller/AuthController");
const { registerValidation, loginValidation } = require("../Middlewares/Authvalidation");

//REGISTER

router.post("/register", registerValidation, register);

//LOGIN

router.post("/login", loginValidation, login);



module.exports = router;