const express = require('express');
const router = express.Router();
const { signupUser } = require('../../controllers/signup/signupController');

router.post('/', signupUser);

module.exports = router;
