const mongoose = require("mongoose");
const Webinars = require('../models/Webinars');

exports.getWebinars = async (req, res) => {
  const { searchText } = req.body;

  const web = await Webinars.find();

  res.json({
    web
  });
};
