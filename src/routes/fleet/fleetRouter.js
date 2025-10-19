const express = require('express');
const router = express.Router();
const { addFleet, getAllFleet } = require('../../controllers/fleet/fleetController');

router.post('/', addFleet);


router.get('/', getAllFleet);

module.exports = router;
