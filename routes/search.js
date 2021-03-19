// const Client = require('../models/clients');
const router = require("express").Router();
const Client = require("../models/clients");
const authenticated = require("./middleware");

router.post("/", async (req, res) => {
  const select = req.body.select;
  const { search: query, date } = req.body;
  console.log(req.body);
  console.log(query);
  if (date) {
    let currentDate = new Date(date);
    let nextDate = new Date(date);
    nextDate = new Date(nextDate.setDate(nextDate.getDate() + 1));
    console.log({ currentDate, nextDate });
    try {
      const Clients = await Client.find({
        [select]: {
          $gte: currentDate,
          $lt: nextDate,
        },
      });
      return Clients.length > 0
        ? res.status(200).render("clients", { Clients })
        : res.status(400).render("error", {
            message: "Ничего не найдено",
          });
    } catch (error) {
      res.status(500).render("error");
    }
  } else {
    try {
      const Clients = await Client.find({
        [select]: { $regex: query, $options: "i" },
      });
      return Clients.length > 0
        ? res.status(200).render("clients", { Clients })
        : res.status(400).render("error", {
            message: "Ничего не найдено",
          });
    } catch (error) {
      res.status(500).render("error");
    }
  }
});
module.exports = router;
