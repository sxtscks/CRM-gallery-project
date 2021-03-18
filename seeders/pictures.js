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
      title: "Боровск. Ледоход",
      author: "Вера Ельницкая",
      cost: 80000,
      image: ''
    },
    {
      title: "Яхты",
      author: "Вера Ельницкая",
      cost: 90000,
      image: ''
    },
    {
      title: "Кораблик",
      author: "Вера Ельницкая",
      cost: 80000,
      image: ''
    },
    {
      title: "Пастырь",
      author: "Игорь Сапунков",
      cost: 100000,
      image: ''
    },
    {
      title: "Сугробы",
      author: "Игорь Сапунков",
      cost: 70000,
      image: ''
    },
    {
      title: "Окуни",
      author: "Никита Павлов",
      cost: 70000,
      image: ''
    },
    {
      title: "Москва. Черемушки",
      author: "Никита Павлов",
      cost: 90000,
      image: ''
    },
    {
      title: "Мамины цветы",
      author: "Никита Павлов",
      cost: 90000,
      image: ''
    },
    
  ];
  
  await Picture.insertMany(pictures);
  await connection.close();
}

main();
