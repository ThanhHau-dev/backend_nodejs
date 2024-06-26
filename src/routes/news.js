// cấu hình route cho trang news

const express = require('express');
const router = express.Router();


const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
router.get('/', newsController.index);


module.exports = router;