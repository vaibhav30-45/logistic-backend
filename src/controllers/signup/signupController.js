exports.signupUser = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: ' All fields are required' });
  }

  res.status(201).json({
    message: 'Signup successful!',
    user: { name, email },
  });
};
