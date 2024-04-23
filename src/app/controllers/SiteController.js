// // import
// const Course = require('../models/Course');

// class SiteController{

//     // Phương thức GET, đang chọc vào home
//     index(req, res){
//         // res.render('home');

//         Course.find({}, function(err, courses){
//             if (!err) res.json(courses);
//             res.status(400).json({ error:'Lỗi rồi!!'});
//         });


//     }
//     // Phương thức GET của news slug
//     search(req, res) {
//         res.render('search');
//     }
// }

// module.exports = new SiteController;





// Cú pháp mới của javascript do gemini sửa
// Import
const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
  // Get choc vao home
  index(req, res, next) {
      Course.find({})
        .then(course => {
            // course = course.map(course => course.toObject())
            // res.render('home', { course });

            res.render('home', { 
              course : mutipleMongooseToObject (course)
            });

        })
        .catch(next);
  }

  // Phương thức GET của news slug
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
