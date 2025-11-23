import express from "express"
import expressValidator from "express-validator";
import Message from "../models/Message.js";
import fetchUser from "../middleware/fetchUser.js";

const router = express.Router()
const { body, validationResult } = expressValidator;

router.post('/createMessage', [
    body('name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('subject').isLength({ min: 5 }),
    body('message').isLength({ min: 10 })
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        let message = await Message.create({
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message
        })

        return res.status(201).json({ success: true, message })
    }
    catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})

router.get('/getMessage', fetchUser, async (req, res) => {
    try {
        let message = await Message.find()

        return res.status(201).json({ success: true, message })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error: error.message });
    }
})

router.delete('/deleteMessage/:id', fetchUser, async (req, res) => {
    try {
        let message = await Message.findByIdAndDelete(req.params.id)

        if (!message) {
            return res.status(404).json({ success: false, message: 'Message not found' });
        }
        message = await Message.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Message has been deleted", message })
    } catch (error) {
        return res.status(500).send("Server Error")
    }
})

export default router;