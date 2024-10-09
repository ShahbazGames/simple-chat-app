//package imports
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

//file imports
import authRoutes from "./routes/auth.routes.js"; 
import messageRoutes from "./routes/message.routes.js"; 
import userRoutes from "./routes/user.routes.js"; 
import { app, server } from "./socket/socket.js";

//database connection
import connnectToMongoDb from "./db/connectToMongoDB.js";

dotenv.config();
//variables

const PORT=process.env.PORT ||5000;
const __dirname=path.resolve();



//middleware
app.use(express.json());                      //to parse the request coming from json payloads (from req.body)

app.use(cookieParser());                  //to parse the cookies from the request headers
app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"));
})

//app.get('/', (req, res)=>{
//    res.send("hello world!");
//});

server.listen(PORT,()=>{
    connnectToMongoDb();
    console.log(`server is running on port ${PORT}`);
});