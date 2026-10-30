import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("WELCOME");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Healthy 🙂",
  });
});

export default app;
