
// Cú pháp mới của javascript do gemini sửa
// Import
const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');


class CourseController {
  // Get choc vao slug
        show(req, res, next){

          Course.findOne({slug: req.params.slug })
          .then(course => 
              res.render('courses/show', { course: mongooseToObject(course) })
          )
          .catch(next);
        }

         // GET tạo khóa học
         create(req, res, next){
            res.render('courses/create')
        }

           // POST tạo khóa học(store)
           store(req, res, next){
              const course = new Course(req.body);
              course.save()
                .then(() => res.redirect('/'))
                .catch(error => {

                });
          }
          // Get chỉnh sửa nội dung theo id
          edit(req, res, next){
            res.render('courses/edit');
        }
}

module.exports = new CourseController();
