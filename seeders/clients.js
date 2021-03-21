const { connect, connection } = require("mongoose");
const Client = require('../models/clients');
const Picture = require('../models/pictures');
const Manager = require('../models/manager')

async function main() {
  await connect('mongodb+srv://Admin:nestic123@cluster0.nzuq1.mongodb.net/myFirstDatabase?retryWrites=true&w=majoritymongodb://localhost:27017/CRM-gallery-project', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  });

  const pictures = [
    {
      title: "Боровск. Ледоход",
      author: "Вера Ельницкая",
      cost: '80000',
      image: "/img/elnitskaya/borovsk.jpg",
    },
    {
      title: "Яхты",
      author: "Вера Ельницкая",
      cost: '90000',
      image: "/img/elnitskaya/yahti.jpg"
    },
    {
      title: "Кораблик",
      author: "Вера Ельницкая",
      cost: '80000',
      image: "/img/elnitskaya/korablik.jpg"
    },
    {
      title: "Пастырь",
      author: "Игорь Сапунков",
      cost: '100000',
      image: "/img/sapunkov/pastir.jpg"
    },
    {
      title: "Сугробы",
      author: "Игорь Сапунков",
      cost: '70000',
      image: "/img/sapunkov/sugrobi.jpg"
    },
    {
      title: "Окуни",
      author: "Никита Павлов",
      cost: '70000',
      image: "/img/pavlov/okuni.jpg"
    },
    {
      title: "Москва. Черемушки",
      author: "Никита Павлов",
      cost: '90000',
      image: "/img/pavlov/omoskva_cheremushki.jpg"
    },
    {
      title: "Мамины цветы",
      author: "Никита Павлов",
      cost: '90000',
      image: "/img/pavlov/mamini_cveti.jpg"
    },

  ];

  await Picture.insertMany(pictures);
  const picturesDB = await Picture.find();

  const clients = [
    {
      companyName: "premier dekor",
      phone: '8499-409-19-29',
      contactPerson: 'Анна',
      personalPhone: '',
      email: '777@premierdekor.ru',
      notes: 'занимаются поставкой мебели из Италии, но заинтересованность в сотрудничестве есть. Были бы рады получить презентацию и образцы.',
      picturesLiked: [picturesDB[0]._id, picturesDB[1]._id],
      picturesBought: [picturesDB[3]._id],
    },
    {
      companyName: "Технология дизайна",
      phone: '(495)787-20-69',
      contactPerson: 'Ольга',
      personalPhone: '',
      email: 'mmdesign@rambler.ru',
      notes: 'до конца слушать не стала. Звонить на городской тел.',
      picturesLiked: [picturesDB[4]._id, picturesDB[5]._id],
      picturesBought: [],
    },
    {
      companyName: 'АртБюро',
      phone: '8 (495) 776 84 13',
      contactPerson: 'Виктор Юдаев',
      personalPhone: '',
      email: 'artburo@yandex.ru	',
      notes: '',
      picturesLiked: [],
      picturesBought: [],
    },
    {
      companyName: 'Биард',
      phone: '8-495-518-62-42',
      contactPerson: 'Ольга',
      personalPhone: '8-495-518-62-42 (мобильный)',
      email: 'beard15@mail.ru',
      notes: 'Выслал каталог 7.10.2014. Слушала с интересом. Приятная в общении',
      picturesLiked: [],
      picturesBought: [],
    },
    {
      companyName: 'Топдом',
      phone: '495-734-99-81',
      contactPerson: 'Информацию высылать для главного архитектора Константина',
      personalPhone: '',
      email: '7349981@topdom.ru',
      notes: 'решения принимает только руководитель. Рассмотрят наше предложение',
      picturesLiked: [],
      picturesBought: [],
    },
    {
      companyName: 'Пентадизайн',
      phone: '(499)1365483',
      contactPerson: 'Эля',
      personalPhone: '8-916-308-11-01 это не личный телефон Эли',
      email: 'fedina2409@mail.ru',
      notes: 'Очень доброжелательна. Заинтересовали возможности сотрудничества. После отправки информ. На электронку просила связаться по мобильн. Тел.',
      picturesLiked: [],
      picturesBought: [],
    },
  ];



  await Client.insertMany(clients);

  const managers = [
    {
      name: 'Admin',
      email: 'admin@mail.ru',
      password: '12345',
      role: true,
    }
  ]

  await Manager.insertMany(managers);

  // const clientsDB = await Client.find();

  // console.log(picturesDB[0]._id);
  // console.log(clientsDB[0].picturesLiked);

  // clientsDB[0].picturesLiked.push(picturesDB[0]._id)
  // clientsDB[0].picturesLiked.push(picturesDB[1]._id)
  // clientsDB[0].picturesLiked.push(picturesDB[2]._id)

  // clientsDB[1].picturesLiked.push(picturesDB[3]._id)
  // clientsDB[1].picturesLiked.push(picturesDB[4]._id)
  // clientsDB[1].picturesLiked.push(picturesDB[5]._id)

  // // clientsDB.forEach(async el => { await el.save() })
  // await clientsDB[0].save;
  // await clientsDB[1].save;


  await connection.close();
}

// main();
