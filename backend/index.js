import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js"

dotenv.config({});

const app = express();

// const PORT = process.env.PORT || 5000;
const PORT = 8080;

//middleware
app.use(express.json());

//routes
app.use("/api/v4/user",userRoute);
// http://localhost:5000/api/v4/user/register


app.listen(PORT, ()=>{
    connectDB();
    console.log(`server listen at port ${PORT}`)
});