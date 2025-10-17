const Service = require('../../models/serviceModel');


const addService = async (req, res) => {
  try {
    const { title, description, price } = req.body;

    if (!title || !description || !price) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newService = new Service({ title, description, price });
    await newService.save();

    res.status(201).json({ success: true, message: 'Service added successfully!' });
  } catch (error) {
    console.error('Error adding service:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


const getAllServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch services' });
  }
};

module.exports = { addService, getAllServices };
