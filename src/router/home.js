const express = require('express');
const HomeController = require('../app/controllers/HomeController');
const router = express.Router();
router.get('/', HomeController.index);
module.exports = router;