const bcrypt = require("bcryptjs");
const saltRounds = 10;

exports.encrypt = async (password) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return hash;
};
