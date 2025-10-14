require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

console.log("📦 MONGO_URI:", MONGO_URI); 

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(` Server running at http://localhost:${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err.message));
