const bcrypt = require("bcryptjs");

const UserModel = require("../Models/user.js");

const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;

        // Basic input validation
        if (!username || !email || !password) {
            return res.status(400).json({message: "All fields are required", success: false});
        }

        const user = await UserModel.findOne({email});
        
        if(user){
            return res.status(400).json({message: "User already exists", success: false});
        }

        const newUser = new UserModel({username, email, password});
        newUser.password = await bcrypt.hash(password, 10);
        await newUser.save();
        res.status(201).json({message: "registered successfully", success: true});
    } 
    catch (error) {
        console.error("Registration error:", error);
        res.status(500).json({
            message: "Registration failed", 
            error: error.message, 
            success: false
        });
    }
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user){
            return res.status(403).json({message: "User not exist"});
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(403).json({message: "Invalid Password"});
        }

        const jwtToken = jwt.sign(
            {
                email: user.email,
                _id: user._id
            },
            process.env.JWT_SECRET,
            {expiresIn: "24h"}
        )

        res.status(200).json(
            {
                message: "Logged in Successfully", 
                success: true, 
                jwtToken,
                email,
                name:user.username
            }
        );
        
    } 
    catch (error) {
        res.status(500).json({message: "Internal Server Error", success: false});
    }
}

module.exports = {register, login};
