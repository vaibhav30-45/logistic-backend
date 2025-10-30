const express = require('express');
const router = express.Router();
const { createBooking } = require('../../controllers/booking/bookingController');


router.post('/', createBooking);


module.exports = router;
