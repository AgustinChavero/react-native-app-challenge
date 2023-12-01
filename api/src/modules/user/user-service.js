const bcrypt = require("bcryptjs");

const loginElement = async (password, user) => {
  const isMatch = await bcrypt.compare(password, user[0].password);

  if (!isMatch) return false;

  return user;
};

module.exports = { loginElement };
