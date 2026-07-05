const Client = require("../models/Client");

// Add a new client
const addClient = async (req, res) => {
  try {
    const client = await Client.create(req.body);

    res.status(201).json({
      message: "Client added successfully",
      client,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get all clients
const getClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addClient,
  getClients,
};