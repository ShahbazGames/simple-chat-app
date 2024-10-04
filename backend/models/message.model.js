import mongoose from "mongoose";


const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true

    }
},{timestamps:true}); // used to show time when the message was created

const Message = mongoose.model("Message",messageSchema);

export default Message;