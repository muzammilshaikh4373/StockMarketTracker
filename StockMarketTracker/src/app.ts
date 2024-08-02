import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import "./utils/cron"; // import the cron job

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/stock-crypto-tracker",
   )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Stock and Crypto Tracker API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
