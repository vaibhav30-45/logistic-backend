const Contact = require('../../models/contactModel');

const saveContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const contact = new Contact({ name, email, phone, message });
    await contact.save();

    res.status(201).json({ success: true, message: 'Contact form submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = { saveContact };
