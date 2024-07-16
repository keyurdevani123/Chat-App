const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "vp", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
