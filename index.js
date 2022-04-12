const express = require("express");
const guitarsRouter = require("./routers/guitars.router");

const Port = 3000;
const colors = require("colors");
const app = express();

// Definera middlewares
app.use(express.json());

// Definera endpoints
app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// Routers
app.use("/api/guitars", guitarsRouter);

// 404 middleware
app.use((req, res) => {
  res.status(404).json("resource was not found!");
});

// Global error
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message });
});

// Starta servern
app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`.bgMagenta);
});
