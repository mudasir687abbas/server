import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/check", (req, res) => {
  res.send("I am just checking router");
});

export default app;
