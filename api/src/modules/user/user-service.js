require("dotenv").config();

const crypto = require("crypto");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const loginElement = async (password, user) => {
  const isMatch = await bcrypt.compare(password, user[0].password);

  if (!isMatch) return false;

  const payload = {
    user: {
      id: user[0].id,
    },
  };

  const options = {
    expiresIn: "24h",
  };

  let token = jwt.sign(payload, process.env.SECRET_KEY, options);
  token = crypto.createHash("sha256").update(token).digest("hex").slice(0, 25);

  return token;
};

module.exports = { loginElement };
