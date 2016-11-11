import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2C', (req, res) => {
  const fullname = req.query.username;  //запрос вида "https://vk.com/durov"
  const re = new RegExp(/(https?:)?(\/\/)?(www\.)?(.+?\/)?(@)?(\w+)?(\.)?(\w+)?/);  //регулярное выражение
  const username = fullname.match(re);  //ищем совпадения, возвращается массив совпавших частей
  console.log(username);

  var tmp1 = username[username.length-1]; 
  var tmp2 = username[username.length-2];

  res.send('@' + username[username.length-3] + (tmp2 ? tmp2 : "" ) + (tmp1 ? tmp1 : "" )); 
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});



   //const re = new RegExp('(https?:)?(\/\/)?((telegram|vk|vkontakte|twitter|github)[^\/]*\/)([a-zA-Z0-9а-яА-Я]*).([a-zA-Z0-9а-яА-Я]*)');
