import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
config();

const app = express();
app.use(express.json());

app.get("/test", (req, res) => {
  throw new Error("ERROR:");
});

app.get("/test1", (req, res) => {
  res.status(200).json("Welcome to the error handler");
});
app.get("/test2", (req, res) => {
  res.status(500).json("Welcome to the error handler");
});
app.get("/test3", (req, res) => {
  res.status(404).json("Welcome to the error handler");
});
app.get("/test4", (req, res) => {
  res.status(400).json("Welcome to the error handler");
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
  next();
});

const PORT = process.env.PORT || 6060;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
