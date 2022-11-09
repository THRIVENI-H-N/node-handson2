const express = require('express')
const server = expresss()
server.get('/api/main',(req,res)=>{
    res.send('hellow world')
    res.send(JSON.stringify(["THRIVENI","H N"]))
})

server.listen(9000,()=>{
    console.log("server started");
    console.log("here server is running");
})