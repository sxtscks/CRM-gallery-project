const Client = require("../models/clients");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const { email } = req.session;
  if (email) {
    const client = await Client.findById(req.params.id);
    return res.render("card", { client });
  }
  return res.sendStatus(401);
});

router.delete("/:id", async (req, res, next) => {
  const { role, email } = req.session;
  if (email && role === true) {
    await Client.findByIdAndDelete(req.params.id);
    return res.sendStatus(200);
  }
  return res.sendStatus(403);
});

router.get("/:id/edit", async (req, res) => {
  const { userId } = req.session;
  if (userId) {
    const client = await Client.findById(req.params.id);
    return res.render("edit", { client });
  }
  return res.sendStatus(401);
});

router.patch("/:id/edit", async (req, res) => {
  const {
    companyName,
    phone,
    contactPerson,
    personalPhone,
    email,
    notes,
    _id,
  } = req.body;
  const { userId } = req.session;
  if (userId) {
    try {
      await Client.findByIdAndUpdate(_id, {
        companyName,
        phone,
        contactPerson,
        personalPhone,
        email,
        notes,
      });
      return res.sendStatus(200);
    } catch {
      return res.sendStatus(500);
    }
  }
});

module.exports = router;
