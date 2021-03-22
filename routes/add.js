const router = require('express').Router();
const Client = require('../models/clients');
const Picture = require('../models/pictures');
const authenticated = require('./middleware');
const multer = require('multer')


router.get('/', authenticated, (req, res) => {
  res.render('add');
});


const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

router.use(multer({ storage: storageConfig }).single('photo'));



router.post('/', async (req, res) => {

  try {
    const newClient = new Client({
      companyName: req.body.clientName,
      phone: req.body.clientPhone,
      contactPerson: req.body.contactPerson,
      personalPhone: req.body.personalPhone,
      email: req.body.companyEmail.trim(),
      notes: req.body.notes,
      createdAt: new Date().toLocaleString('ru-RU')
    })
    await newClient.save()

    try {
      const newPicture = new Picture({
        title: req.body.title,
        author: req.body.author,
        cost: req.body.cost,
        image: `/uploads/${req.file.filename}`,
      })
      await newPicture.save();
  
      const myPicture = await Picture.findOne({ title: req.body.title })
      const myClient = await Client.findOne({companyName: req.body.clientName})
  
      myClient.picturesLiked.push(myPicture._id)
      await myClient.save()
      
    } catch (error) {
      console.log('Нет добавленной картинки')
    }

    return res.redirect('/clients')

  } catch (e) {
    return res.render('error', {
      message: 'Не удалось добавить нового клиента в базу данных.',
    });
  }

})

module.exports = router;
