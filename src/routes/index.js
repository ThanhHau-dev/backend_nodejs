// nạp tuyến đường 
const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const userRouter = require('./user');


// các tuyến đường cho các trang đã được đưa vào trang controller để thực thi
function route(app){
 
      app.use('/news', newsRouter);
      app.use('/user', userRouter);
      app.use('/courses', coursesRouter);
      app.use('/', siteRouter);
 
}

module.exports = route; 