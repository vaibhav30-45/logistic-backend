const express = require('express');
const app = express();

const loginRoutes = require('./routes/login/loginRouter');
const signupRoutes = require('./routes/signup/signupRouter');
const contactRoutes = require('./routes/contact/contactRouter');
const serviceRoutes = require('./routes/service/serviceRouter');
const fleetRoutes = require('./routes/fleet/fleetRouter');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is working fine!');
});

app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);
app.use('/contact', contactRoutes);
app.use('/fleet', fleetRoutes);

app.use('/service', serviceRoutes);

module.exports = app;



