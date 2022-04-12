const express = require("express");

const guitarsRouter = express.Router();

let guitars = [];

// all routes in here starts with /guitars

guitarsRouter.get("/:id", (req, res) => {
  const id = req.params;
  const foundGuitar = guitars.find((guitar) => guitar.id === id);
  res.send(foundGuitar);
});

guitarsRouter.get("/", (req, res) => {
  res.send(guitars);
});

guitarsRouter.post("/", (req, res) => {
  console.log(req.body);
  guitars.push(req.body);
  res.status(201).send(`${req.body.brand}, ${req.body.model} added`);
});

guitarsRouter.put("/:id", (req, res) => {
  res.send(`guitar with id "${req.params.id}" was updated`);
});

guitarsRouter.delete("/:id", (req, res) => {
  res.send(`guitar with id "${req.params.id}" was deleted`);
});

module.exports = guitarsRouter;
