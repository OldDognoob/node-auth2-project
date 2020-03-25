/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");

module.exports = restricted;

// const THE_SECRET = process.env.THE_SECRET || '...not very secret...'

function restricted(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: "Token for strangers."
        });
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "You need a token..." });
  }
}
