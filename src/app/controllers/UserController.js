
// Cú pháp mới của javascript do gemini sửa
// Import
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class UserController {
 
  // Phương thức GET cho trang người dùng quản lý trang sản phẩm
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses =>  res.render('user/stored-courses', 
          {courses: mutipleMongooseToObject(courses)}
          ))
      .catch(next);
  }
}

module.exports = new UserController();
