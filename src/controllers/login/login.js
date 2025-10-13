exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  if (email === 'test@example.com' && password === '12345') {
    res.json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};
