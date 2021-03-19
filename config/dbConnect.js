const mongoose = require('mongoose')
const { dbConnectionURL, options } = require('./dbConfig')

function dbConnect() {
  console.log(dbConnectionURL)
  mongoose.connect(dbConnectionURL, options, (err) => {
    if (err) return console.log(err)
    console.log('Success connected to mongo')
  })
}

module.exports = dbConnect