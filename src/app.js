const express = require('express');

const app = express();

app.use("/test",(req, res)=>{
    res.send("hello world is running")
})

app.use("/",(req, res)=>{
    res.send("hello world is running on root path")
})

app.use("./result", (req, res)=>{
    res.send("shashank");
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});