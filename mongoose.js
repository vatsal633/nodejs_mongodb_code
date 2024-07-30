import mongoose from "mongoose";
import express from "express";
import Todo from "./models/todo.js";
const app = express();
const port = 8000;

let connection = await mongoose.connect("mongodb://localhost:27017/");


app.get('/',(req,res)=>{
    try{
        const todo = new Todo({title:"hey first to do",desc:"description of the todo",isdone:true,days:7})
        todo.save()
    }catch(err){
        console.log(err)
    }
})

app.get('/f',async(req,res)=>{
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title : todo.title,desc : todo.desc})
})

app.listen(port,()=>{
    console.log(`this server runs port ${port}`)
})
