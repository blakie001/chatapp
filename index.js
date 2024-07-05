const express = require("express")
const mongoose = require("mongoose")

const app = express();

// const http = require("http")

// // const server = http.createServer((req, res)=>{
    // console.log(req.url)
// // })


app.get("/get", (req, res)=>{
    res.send("this is req in get api")
})

// C R U D

// app.get("/:name", (req, res) =>{
//     res.send("hi " + req.params.name)
// })


//create:
app.post("/post", (req, res) =>{
    res.send("this is post api")
})

// read == get

// update :
app.put("/put", (req, res) =>{
    res.send("this is put api used to update user info")
})

// delete

app.delete("/delete",(req, res)=>{
    res.send("this is delete api use to delete user info")
})

app.get("*", (req, res)=>{
    res.send("404 : page not found")
})


app.listen("3000",()=>{
    console.log("server is running")
})