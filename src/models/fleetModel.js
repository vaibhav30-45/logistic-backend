const mongoose = require('mongoose');

const fleetSchema = new mongoose.Schema(
  {
    vehicleName: {
      type: String,
      required: true,
      trim: true,
    },
    vehicleType: {
      type: String,
      required: true,
      trim: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    pricePerKm: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String, // optional field if you store vehicle images
      default: ''
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Fleet', fleetSchema);
