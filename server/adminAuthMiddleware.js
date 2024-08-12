const adminAuth = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) {
      return res.status(401).send('Access denied');
    }
  
    try {
      const decoded = jwt.verify(token, 'your_jwt_secret');
      if (decoded.role !== 'admin') {
        return res.status(403).send('Forbidden');
      }
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).send('Invalid token');
    }
  };
  module.exports = adminAuth;