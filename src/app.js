const express = require('express');
const app = express();


const loginRoutes = require('./routes/login/login');
const signupRoutes = require('./routes/signup/signup');


app.use(express.json());

app.get('/', (req, res) => {
  res.send(' Server is working fine!');
});


app.use('/login', loginRoutes);
app.use('/signup', signupRoutes);

module.exports = app;


