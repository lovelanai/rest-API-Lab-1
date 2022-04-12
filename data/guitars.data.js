let guitars = [];

// Get all added guitars
const getGuitars = (req, res) => {
  res.send(guitars);
};
exports.getGuitars = getGuitars;

// Adding new Guitar and giving it a random ID-number between 1-100
const addGuitar = (req, res) => {
  const guitar = req.body;

  const guitarId = Math.random().toFixed(2) * 100;

  guitars.push({ ...guitar, id: guitarId });

  res
    .status(201)
    .send(`${req.body.brand} ${req.body.model} added with id ${guitarId}`);
};
exports.addGuitar = addGuitar;

// Fetches guitar by id
const fetchGuitar = (req, res) => {
  const { id } = req.params;

  const foundGuitar = guitars.find((guitar) => guitar.id == id);
  res.status(404).send(`Guitar with ID ${req.params.id} does not exist`);
  res.send(foundGuitar);
};
exports.fetchGuitar = fetchGuitar;

// Fetches and enables changes to a guitar by id
const putGuitar = (req, res) => {
  const { id } = req.params;

  const guitar = guitars.find((guitar) => guitar.id == id);

  const { brand, model, color } = req.body;

  if (guitar) {
    if (brand) {
      guitar.brand = brand;
    }

    if (model) {
      guitar.model = model;
    }

    if (color) {
      guitar.color = color;
    }
  } else {
    res.status(404).send(
      `Failed to update Guitar with id ${req.params.id}
try again with a different id`
    );
  }

  res.send(`Guitar with id "${req.params.id}" was updated`);
};
exports.putGuitar = putGuitar;

// Delete guitar by id
const deleteGuitar = (req, res) => {
  const { id } = req.params;

  guitars = guitars.filter((guitar) => guitar.id != id);

  if (guitars) {
    guitars.push(req.body);
    res.send(`guitar with id "${req.params.id}" was deleted`);
  } else {
    res.status(404).send(`Failed to delete Guitar with ID ${req.params.id}
      Try again with a different id`);
  }
};

exports.deleteGuitar = deleteGuitar;
