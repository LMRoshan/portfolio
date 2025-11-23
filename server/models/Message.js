import mongoose from "mongoose"
const {Schema} = mongoose; 

const messageSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true
    }, 
    subject: {
        type: String,
        required: true
    }, 
    message: {
        type: String,
        required: true
    }
})

const Message = mongoose.model('message', messageSchema)

export default Message