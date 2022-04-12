const express = require("express");

const guitarsRouter = express.Router();

const guitarData = require("../data/guitars.data");

// all routes in here starts with /guitars
guitarsRouter.get("/", guitarData.getGuitars);

// Adding new Guitar and giving it a random ID-number between 1-100
guitarsRouter.post("/", guitarData.addGuitar);

// Fetches guitar by id
guitarsRouter.get("/:id", guitarData.fetchGuitar);

// Put guitar by id
guitarsRouter.put("/:id", guitarData.putGuitar);

// Delete guitar by id
guitarsRouter.delete("/:id", guitarData.deleteGuitar);

module.exports = guitarsRouter;
