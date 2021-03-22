const Client = require('../models/clients');
const Pictures = require('../models/pictures');
const router = require('express').Router();
const authenticated = require('./middleware');
const multer = require('multer')



router.get('/:id', authenticated, async (req, res) => {
  try {
    const client = await Client.findById(req.params.id).populate('picturesLiked').populate('picturesBought').exec();
    res.render('card', { client });
    
  } catch (error) {
    console.log(error);
  }
  
});

router.delete('/:id', authenticated, async (req, res, next) => {
  await Client.findByIdAndDelete(req.params.id)
  return res.sendStatus(200);
})


const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  }
});

router.use(multer({ storage: storageConfig }).single('photo'));

router.get('/:id/edit', authenticated, async(req, res) => { 
  const client = await Client.findById(req.params.id);
  res.render('edit', { client });
});

router.patch('/:id/edit', authenticated, async(req, res) => {
  const { companyName, phone, contactPerson, personalPhone, email, notes, _id } = req.body;

    try {
      await Client.findByIdAndUpdate(_id, { companyName, phone, contactPerson, personalPhone, email, notes });

      try {
        const newPicture = new Picture({
          title: req.body.title,
          author: req.body.author,
          cost: req.body.cost,
          image: `/uploads/${req.file.filename}`,
        })
        await newPicture.save()
    
        const myPicture = await Picture.findOne({ title: req.body.title })
        const myClient = await Client.findOne({companyName: req.body.clientName})
    
        myClient.picturesLiked.push(myPicture._id)
        await myClient.save();
        
      } catch (error) {
        console.log('Нет картинки')
      }

      return res.sendStatus(200);
    } catch {
      return res.sendStatus(500);
    }
})

module.exports = router;
