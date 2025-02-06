// import express from "express"

// import dotenv from "dotenv"

// import authRoutes from "./routes/auth.routes.js"

// const app = express()
// const port  = process.env.PORT

// app.use("/api/auth",authRoutes)

// app.listen(PORT,()=>{
//  console.log("my server is running on Port :" + PORT)
// })
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config(); // Initialize dotenv to load environment variables

const app = express();
const port = process.env.PORT  // Fallback to port 3000 if not defined in .env

app.use("/api/auth", authRoutes);
//
app.listen(port, () => {
  console.log("My server is running on port: " + port);
});
