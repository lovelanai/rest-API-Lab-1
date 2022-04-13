const express = require("express");
const shortid = require("shortid");
const router = express.Router();

let guitars = [
  {
    brand: "Fender",
    model: "Stratocaster",
    color: "Maple",
    id: shortid.generate(),
  },
  {
    brand: "Gibson",
    model: "Les Paul",
    color: "Sunburst",
    id: shortid.generate(),
  },
  {
    brand: "Fender",
    model: "Mustang",
    color: "Tobacco",
    id: shortid.generate(),
  },
];

router.get("/", (req, res) => {
  if (guitars.length == 0) {
    res.status(404).send(`The Guitarlist is emty... 
    
Try adding some Guitars :)`);
  } else {
    res.json(guitars);
  }
});

router.get("/:id", (req, res) => {
  const foundGuitar = guitars.find((guitar) => guitar.id === req.params.id);
  if (!foundGuitar) {
    res.status(404).send("Guitar with given id does not exist");
  } else {
    res.send(foundGuitar);
  }
});

router.post("/", (req, res) => {
  const guitarId = shortid.generate();
  const newGuitar = {
    brand: req.body.brand,
    model: req.body.model,
    color: req.body.color,
    id: guitarId,
  };

  if (!req.body.brand || !req.body.model || !req.body.color) {
    res.status(404).send(`
Failed to add Guitar...
Guitar needs the following attributes to be added
    
brand: "enter brand here",
model: "enter model here",
color: "enter color here",`);
  } else {
    guitars.push(newGuitar);
    res.send(
      `A ${req.body.color} ${req.body.brand} ${req.body.model} was added to the database!

ID:${guitarId}`
    );
  }
});

router.put("/:id", (req, res) => {
  const foundGuitar = guitars.find((guitar) => guitar.id === req.params.id);

  if (!foundGuitar) {
    res.status(404).send("Failed to update guitar with given id");
  } else {
    foundGuitar.brand = req.body.brand;
    foundGuitar.model = req.body.model;
    foundGuitar.color = req.body.color;
    res.send("Guitar was updated");
  }
});

router.delete("/:id", (req, res) => {
  const foundGuitar = guitars.find((guitar) => guitar.id === req.params.id);

  if (!foundGuitar) {
    res.status(404).send("Failed to delete guitar with given id");
  } else {
    const guitarIndex = guitars.indexOf(foundGuitar);
    guitars.splice(guitarIndex, 1);

    res.send("Guitar was deleted");
  }
});
module.exports = router;
