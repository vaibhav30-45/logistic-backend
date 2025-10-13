exports.signupUser = (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    message: ' Signup successful!',
    user: { name, email },
  });
};
