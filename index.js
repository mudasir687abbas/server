import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/user", (req, res) => {
  res.json({"well":"it is working well"});
});

export default app;
