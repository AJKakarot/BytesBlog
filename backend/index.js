import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import path from "path";

import cors from "cors";
import e from "express";
const app = express();
dotenv.config();

const port = process.env.PORT;
const MONOGO_URL = process.env.MONGO_URI;

const _dirname = path.resolve();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin:"https://bytesblog.onrender.com", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// DB Code
try {
  mongoose.connect(MONOGO_URL);
  console.log("Conntected to MonogDB");
} catch (error) {
  console.log(error);
}

// defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get("*", (_ , res) => {  
  res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
