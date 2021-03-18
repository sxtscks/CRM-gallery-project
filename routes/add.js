const router = require('express').Router();
const Client = require('../models/clients')
const multer  = require('multer')


router.get('/', (req, res) => {
  res.render('add');
});

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) =>{
      cb(null, "uploads");
  },
  filename: (req, file, cb) =>{
      cb(null, file.originalname);
  }
});

router.use(multer({storage:storageConfig}).single('book'));


router.post('/', async (req, res) => {
  const newClient = new Client({
    companyName: req.body.clientName,
    phone: req.body.clientPhone,
    contactPerson: req.body.contactPerson,
    personalPhone: req.body.personalPhone,
    email: req.body.companyEmail,
    notes: req.body.notes,
    
  })
  await newClient.save()

  return res.redirect('/clients')
})

module.exports = router;
