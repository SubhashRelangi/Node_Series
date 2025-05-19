const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.post('/', registerController.handleNewUser);  // Fixed typo: 'handelNewUser' → 'handleNewUser'

module.exports = router;