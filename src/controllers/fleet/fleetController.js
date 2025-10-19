const Fleet = require('../../models/fleetModel');

const addFleet = async (req, res) => {
  try {
    const { vehicleName, vehicleType, capacity, pricePerKm, imageUrl } = req.body;

    if (!vehicleName || !vehicleType || !capacity || !pricePerKm) {
      return res.status(400).json({ success: false, message: 'All required fields must be filled' });
    }

    const newFleet = new Fleet({
      vehicleName,
      vehicleType,
      capacity,
      pricePerKm,
      imageUrl,
    });

    await newFleet.save();
    res.status(201).json({ success: true, message: 'Fleet vehicle added successfully!' });
  } catch (error) {
    console.error('Error adding fleet:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


const getAllFleet = async (req, res) => {
  try {
    const fleetData = await Fleet.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: fleetData });
  } catch (error) {
    console.error('Error fetching fleet:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch fleet data' });
  }
};

module.exports = { addFleet, getAllFleet };
