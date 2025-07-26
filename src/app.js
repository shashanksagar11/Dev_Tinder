const express = require('express');

const app = express();

//This will only handle GET call to/user

app.get("/user",(req, res)=>{
    res.send({firstName:"shashank", lastName:"sharma", age: 22, city: "delhi"})
}), 

// app.use("/", (req, res)=>{
//     res.send("hello world")
// })

//ThIS will match all the HTTP method API call to/test
app.use("/test",(req, res)=>{
    res.send("hello world is running")
})

// app.use("/hello", (req, res)=>{
//     res.send("hello hello hello")
// })

// app.use("/hello/2",(req, res)=>{
//     res.send("hello world is running on root path")
// })

// app.use("/result", (req, res)=>{
//     res.send("shashank");
// })

// app.use("/", (req, res)=>{
//     res.send("hello world")
// })

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});