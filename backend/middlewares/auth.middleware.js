const jwt = require("jsonwebtoken");

exports.authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer:", "");        
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.body.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ message: error });
  }
}