const express = require('express')
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const mongoose = require('mongoose')


const app = express();
const PORT = 3000

app.set('view engine', 'hbs')
app.set('views', path.join(process.env.PWD, 'views'))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(process.env.PWD, 'public')))


app.listen(PORT, () => {
  console.log('Server started');
  mongoose.connect('mongodb://localhost:27017/CRM-gallery-project', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Подключено к базе данных!');
  })
})
