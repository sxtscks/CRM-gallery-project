const { connect, connection } = require("mongoose");
const Picture = require('../models/pictures');

async function main() {
  await connect('mongodb://localhost:27017/CRM-gallery-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });
  
  const pictures = [
    {
      title: "Salsif",
      author: "u"
    },
    
  ];
  
  await Entry.insertMany(pictures);
  await connection.close();
}

main();
