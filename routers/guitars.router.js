const express = require("express");

const router = express.Router();

const guitarController = require("../controllers/guitars.controller");

// Gets All guitars
router.get("/", guitarController.getGuitars);

// Gets Guitar by ID
router.get("/:id", guitarController.getGuitarById);

// Adding new Guitar
router.post("/", guitarController.addGuitar);

// Changes Guitar by ID
router.put("/:id", guitarController.changeGuitar);

// Deletes Guitar by ID
router.delete("/:id", guitarController.deleteGuitar);

module.exports = router;
