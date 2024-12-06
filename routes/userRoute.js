const express = require('express');
const { createUser, getUsers } = require('../controllers/userController');
const router = express.Router();

router.post('/create-user', createUser);
router.get('/get-user', getUsers);

module.exports = router;