const express = require('express')
const multer  = require('multer')
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const mongoose = require('mongoose')


const indexRouter = require('./routes/index')
const signupRouter = require('./routes/signup')
const loginRouter = require('./routes/login')
const signoutRouter = require('./routes/signout')
const clientsRouter = require('./routes/clients')
const cardRouter = require('./routes/card')
const addRouter = require('./routes/add')


const app = express();
const PORT = 3000

const secretKey = 'SUPER SECRET KEY'

app.set('view engine', 'hbs')
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'))
app.set('views', path.join(process.env.PWD, 'views'))

app.use(session({
  name: 'sid',
  secret: secretKey,
  resave: false,
  saveUninitialized: false,
  store: new FileStore({
    secret: secretKey,
  }),
  cookie: {
    httpOnly: true,
    maxAge: 86400 * 1e3,
  }
}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.env.PWD, 'public')))
// app.use(multer({dest:"uploads"}).single("filedata"));

app.use(async (req, res, next) => {
  res.locals.userId = req.session.userId
  res.locals.name = req.session.name
  res.locals.email = req.session.email
  res.locals.role = req.session.role
  next()
})


app.use('/', indexRouter);
app.use('/signup', signupRouter)
app.use('/login', loginRouter)
app.use('/signout', signoutRouter)
app.use('/clients', clientsRouter)
app.use('/card', cardRouter)
app.use('/add', addRouter)


app.listen(PORT, () => {
  console.log('Server started');
  mongoose.connect('mongodb://localhost:27017/CRM-gallery-project', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Подключено к базе данных!');
  })
})
