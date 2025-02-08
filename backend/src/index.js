
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
  
import { ConnectDB } from "./lib/db.js";
import { connect } from "mongoose";


dotenv.config(); // Initialize dotenv to load environment variables

const app = express();
const PORT = process.env.PORT  // Fallback to port 3000 if not defined in .env

app.use("/api/auth", authRoutes);
//
app.listen(PORT, () => {
  console.log("My server is running on port: " + PORT);

  ConnectDB()
});






