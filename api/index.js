import express from "express";

const app = express();

// Middleware
app.use(express.json());

// Route 1
app.get("/", (req, res) => {
  res.json({ message: "Server running" });
});

// Route 2
app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ message: err.message });
});

// ❌ Do NOT use app.listen() on Vercel
export default app;
