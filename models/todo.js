import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    desc : String,
    isdone : Boolean,
    days:Number
});

const Todo = mongoose.model("Todo",todoSchema)

export default Todo
