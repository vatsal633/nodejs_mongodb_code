import mongoose from "mongoose";
import express from "express";
import {Todo} from "../models/todo";
const app = express();
const port = 8000;

let connection = await mongoose.connect("mongodb://localhost:27017/");


app.get('/',(req,res)=>{
    const todo = new Todo({title:"hey first to do",desc:"description of the todo",isdone:true})
    todo.save()
    res.send("hello world");
})

app.listen(port,()=>{
    console.log(`this server runs port ${port}`)
})  
