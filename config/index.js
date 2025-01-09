const dotenv = require("dotenv");
dotenv.config();

const _config = {
  mongoUri: process.env.MONGO_URI,
  port: process.env.PORT || 3000,
};

module.exports = Object.freeze(_config);
