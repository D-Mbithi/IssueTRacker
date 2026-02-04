import dotenv from "dotenv";
dotenv.config();
import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
import issueRoutes from "./routes/issueRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(express.json());

// if you receive a request to /api/issues(Get, Post, Put, Delete)
// delegate the request to issueRoutes
app.use("/api/issues", issueRoutes);

app.use("/api/auth", authRoutes);
connectDB();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Server is running on port ${port} in ${process.env.NODE_ENV} mode`.green
      .bold.underline,
  );
});
