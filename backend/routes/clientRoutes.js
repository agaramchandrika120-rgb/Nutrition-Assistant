const express = require("express");
const {
  addClient,
  getClients,
} = require("../controllers/clientController");

const router = express.Router();

router.post("/add", addClient);
router.get("/", getClients);

module.exports = router;