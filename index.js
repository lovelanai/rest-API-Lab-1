const express = require("express");
const json = require("express/lib/response");

const guitarsRouter = require("./routers/guitars.router");

const app = express();
const Port = 3000;
const colors = require("colors");

app.use("", express.static("public"));
app.use(express.json());

//hämtar router till guitars
// app.use("/api/guitars", guitarsRouter);

const guitars = [
  {
    brand: "gibson",
    model: "sg",
    color: "red",
    id: 1,
  },

  {
    brand: "fender",
    model: "stratocaster",
    color: "black",
    id: 2,
  },
];

app.get("/api/guitars", (req, res) => {
  res.json(guitars);
});

app.post("/api/guitars", (req, res) => {
  console.log(req.body);
  guitars.push(req.body);
  res.status(201).send(`${req.body.brand}, ${req.body.model} added`);
});

//  Definera våra endpoints

// 404 middleware
app.use((req, res) => {
  res.status(404).json("resource was not found!");
});

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`.bgMagenta);
});
