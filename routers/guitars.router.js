const express = require("express");

const guitarsRouter = express.Router();

// all routes in here starts with /guitars

guitarsRouter.get("/:id", (req, res) => {
  res.send(`guitar with id "${req.params.id}"`);
});

guitarsRouter.get("/", (req, res) => {
  res.send("all guitars");
});

guitarsRouter.post("/", (req, res) => {
  res.send("a new guitar was saved");
});

guitarsRouter.put("/:id", (req, res) => {
  res.send(`guitar with id "${req.params.id}" was updated`);
});

guitarsRouter.delete("/:id", (req, res) => {
  res.send(`guitar with id "${req.params.id}" was deleted`);
});

module.exports = guitarsRouter;
