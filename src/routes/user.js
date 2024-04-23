// cấu hình route cho trang user 

const express = require('express');
const router = express.Router();


const userController = require('../app/controllers/UserController');

router.get('/stored/courses', userController.storedCourses);

module.exports = router;