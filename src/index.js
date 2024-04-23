
// import các thư viện
const path = require('path');
const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
const port = 3000;

// nạp function route trong thư mục routes
const route = require('./routes');

// conect db
const db = require('./config/db');
db.connect();

// ảnh or file tĩnh, public
app.use(express.static(path.join(__dirname, 'public')));

// mi đờ we
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// hen đồ ba
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// tuyến đường, đã được tạo theo mô hình mvc, các tuyến đường phía dưới đc cmt đã đưa vào trong thư mục rout
route(app);

// tuyến đường, route đã cmt
// app.get('/', (req, res) => {
//   res.render('home');
// })

// app.get('/news', (req, res) => {
//   res.render('news');
// })

// app.get('/search', (req, res) => {
//   res.render('search');
// })

// app.post('/search', (req, res) => {
//   res.render('search');
// })



// cổng chạy của dự án
app.listen(port, () => {
  console.log(`Server đang chạy thành công ở cổng ${port}`)
});