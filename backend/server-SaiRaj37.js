

import express from "express"
import morgan from "morgan"
import connectDB from "./config/db.js"
import userModel from "./models/user.js"

const app = express()


app.set("view engine","ejs")
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use((req,res,next)=>{
  console.log("This is middleware");
  next()
  
})

app.get("/h",(req,res)=>{
  res.send("hello")

})
app.get("/",(req,res)=>{
  res.render("index")

})

app.get("/about",(req,res)=>{
  res.send("about")
})

app.get("/get-form",(req,res)=>{
  console.log(req.query);
  
  res.send("Data received")
})

app.post("/get-form",(req,res)=>{
  console.log(req.body);
  res.send("Data received")
})

app.get("/register",(req,res)=>{
  res.render("register")
})
app.post("/register",(req,res)=>{
  console.log(req.body);
  res.send(" User registered")
})
app.listen(3000,()=>{
  console.log("server is running on port 3000")
})