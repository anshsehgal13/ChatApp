import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "../db/connectToMongoDB.js";
const app = express();

app.use(express.json()); 
app.use(cookieParser());

const PORT = process.env.PORT || 5000;
dotenv.config();


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server running on Port ${PORT}`)});