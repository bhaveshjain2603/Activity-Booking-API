const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  console.log('Incoming Token:', token); // Add this line

  if (!token) return res.status(401).json({ message: 'No token, authorization denied' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Token:', decoded); // Add this line
    req.user = decoded.id;
    next();
  } catch (err) {
    console.error('Token error:', err); // Add this line
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = auth;
