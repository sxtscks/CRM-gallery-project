// const Client = require('../models/clients');
const router = require("express").Router();
const Client = require("../models/clients");
const authenticated = require("./middleware");

router.post("/", async (req, res) => {
  const select = req.body.select;
  const query = req.body.search;
  try {
    const Clients = await Client.find({
      [`${select}`]: { $regex: query, $options: "i" },
    });
    return (Clients.length > 0)
    ? res.status(200).render("clients", { Clients })
    : res.status(400).render('error', {
      message: 'Ничего не найдено'
    });
  } catch (error) {
    res.status(500).render('error');
  }
});
module.exports = router;
