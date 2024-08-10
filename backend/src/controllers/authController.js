const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if user exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        console.log(req.body); // Log received data on the server

        // Create new user
        user = new User({
            username,
            email,
            password,
        });

        // Hash password
        // Hash password
        const salt = await bcrypt.genSalt(10);
        console.log("Generated Salt:", salt); // Add this line to debug
        user.password = await bcrypt.hash(password, salt);
        console.log("Heyy Hashed Password:", user.password); // Add this line to debug


        await user.save();

        // Create and return JWT
        const payload = {
            user: {
                id: user.id,
            },
        };
        
        console.log("Payload:", payload);
        console.log("JWT_SECRET:", process.env.JWT_SECRET);
        
        jwt.sign(
            payload,
            process.env.JWT_SECRET || 'hardcodedsecret', // Use a hardcoded secret temporarily if env variable is not set
            { expiresIn: 360000 },
            (err, token) => {
                if (err) {
                    console.error("Error creating JWT:", err); // Log error if JWT creation fails
                    return res.status(500).json({ msg: 'Error creating token' });
                }
                console.log("Generated Token:", token); // Debugging the generated token
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
