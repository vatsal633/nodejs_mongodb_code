import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    desc : String,
    isdone : Boolean
});

export const kitten = mongoose.model("todo",todoSchema)