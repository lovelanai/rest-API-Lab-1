let guitars = [];

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

const putGuitar = (req, res) => {
  const { id } = req.params;

  const guitar = guitars.find((guitar) => guitar.id == id);

  const { brand, model, color } = req.body;

  if (brand) {
    guitar.brand = brand;
  }

  if (model) {
    guitar.model = model;
  }

  if (color) {
    guitar.color = color;
  }

  res.send(`Guitar with id "${req.params.id}" was updated`);

  res.status(404).send(
    `Failed to update Guitar with ID ${req.params.id}
      try with another id`
  );
};

exports.putGuitar = putGuitar;

const deleteGuitar = (req, res) => {
  const { id } = req.params;

  guitars = guitars.filter((guitar) => guitar.id != id);

  guitars.push(req.body);
  res.status(404).send(`Failed to delete Guitar with ID ${req.params.id}
Try again with a different id`);
  res.send(`guitar with id "${req.params.id}" was deleted`);
};

exports.deleteGuitar = deleteGuitar;
