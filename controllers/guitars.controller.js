const shortid = require("shortid");

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

const getGuitars = (req, res) => {
  if (guitars.length == 0) {
    res.status(404).send(`The Guitarlist is empty... 
    
Try adding some Guitars :)`);
  } else {
    res.json(guitars);
  }
};
exports.getGuitars = getGuitars;

const getGuitarById = (req, res) => {
  const foundGuitar = guitars.find((guitar) => guitar.id === req.params.id);
  if (!foundGuitar) {
    res.status(404).send("Guitar with given id does not exist");
  } else {
    res.send(foundGuitar);
  }
};
exports.getGuitarById = getGuitarById;

const addGuitar = (req, res) => {
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
};
exports.addGuitar = addGuitar;

const changeGuitar = (req, res) => {
  const foundGuitar = guitars.find((guitar) => guitar.id === req.params.id);

  if (!foundGuitar) {
    res.status(404).send("Failed to update guitar with given id");
  } else {
    foundGuitar.brand = req.body.brand;
    foundGuitar.model = req.body.model;
    foundGuitar.color = req.body.color;
    res.send("Guitar was updated");
  }
};
exports.changeGuitar = changeGuitar;

const deleteGuitar = (req, res) => {
  const foundGuitar = guitars.find((guitar) => guitar.id === req.params.id);

  if (!foundGuitar) {
    res.status(404).send("Failed to delete guitar with given id");
  } else {
    const guitarIndex = guitars.indexOf(foundGuitar);
    res.send("Guitar was deleted");
    guitars.splice(guitarIndex, 1);
  }
};
exports.deleteGuitar = deleteGuitar;
