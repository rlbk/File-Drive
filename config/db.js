const mongoose = require("mongoose");
const config = require(".");

function connectToDb() {
  mongoose.connect(config.mongoUri).then(() => {
    console.log("Connected to DB");
  });
}

module.exports = connectToDb;
