import express from "express"
import expressValidator from "express-validator";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import User from "../models/User.js";

const router = express.Router();
const { body, validationResult } = expressValidator;
const JWT_SECRET = process.env.JWT_SECRET

router.post('/createUser', [
    body('username').isLength({ min: 3 }),
    body('password').isLength({ min: 6 }
    )
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        let user = await User.findOne({ username: req.body.username });
        if (user) {
            return res.status(400).json({ errors: [{ msg: "User already exists" }] });
        }

        const salt = await bcrypt.genSalt(10)
        const secPassword = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            username: req.body.username,
            password: secPassword
        })

        const data = {
            user: {
                id: user._id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)

        res.json({ success: true, user, authToken })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: [{ msg: "Server error" }] })

    }
})

router.post('/login', [body('username').isLength({ min: 3 }),
body('password').isLength({ min: 6 })], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username })
        if (!user) {
            return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] })
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] })
        }

        const data = {
            user: {
                id: user._id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({ success: true, user, authToken });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ errors: [{ msg: 'Server error' }] });
    }
})

export default router;