const express = require('express');
const router = express.Router();
const { signupUser } = require('../../controllers/signup/signup');

router.post('/', signupUser);

module.exports = router;
