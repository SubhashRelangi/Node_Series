const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/', authController.handelLogin);  // Fixed typo: 'handelNewUser' → 'handleNewUser'

module.exports = router;