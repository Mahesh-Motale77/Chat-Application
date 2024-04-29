import mongoose from "mongoose";

const conversationModel = new mongoose.model({
    participants : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"message",
    }]
},{timestamp:true});

export const Conversation = mongoose.model("Conversation", "conversationModel");