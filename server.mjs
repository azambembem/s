import express from "express";
import { config } from "dotenv";
config();

const app = express();
app.use(express.json());

app.get("/test1", (req, res) => {
  res.status(200).json("test12");
});

app.post("/test2", (req, res) => {
  Z;
  console.log("test3");
  console.log("test4");
});

const PORT = process.env.PORT || 6060;

app.listen(PORT, () => {
  console.log(`Server is running on port1 ${PORT}`);
  console.log("Server is running on port2");
  console.log("Server is running on port3");
});
