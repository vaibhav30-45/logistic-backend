const Fleet = require('../../models/fleetModel');
const Booking = require('../../models/bookingModel');

exports.createBooking = async (req, res) => 
 {
  try {
    console.log(" Incoming booking data:", req.body);  

    const { customerName, customerEmail, customerPhone, vehicleId, pickupLocation, dropLocation, distanceKm } = req.body;


    if (!vehicleId) {
      return res.status(400).json({ success: false, message: 'Vehicle ID is required' });
    }


    const mongoose = require('mongoose');
    if (!mongoose.Types.ObjectId.isValid(vehicleId)) {
      return res.status(400).json({ success: false, message: 'Invalid vehicle ID format' });
    }

  
    const vehicle = await Fleet.findById(vehicleId);
    console.log("🚚 Found vehicle:", vehicle);  

    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Vehicle not found' });
    }


    const totalPrice = vehicle.pricePerKm * distanceKm;

 
    const newBooking = await Booking.create({
      customerName,
      customerEmail,
      customerPhone,
      vehicleId,
      pickupLocation,
      dropLocation,
      distanceKm,
      totalPrice,
      status: 'Pending'
    });

    console.log("Booking created:", newBooking);

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: newBooking,
    });
  } catch (error) {
    console.error(" Error creating booking:", error); 
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
};
