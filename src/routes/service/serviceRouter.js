const express = require('express');
const router = express.Router();
const { addService, getAllServices } = require('../../controllers/service/serviceController');

router.post('/', addService);

router.get('/', getAllServices);

module.exports = router;
