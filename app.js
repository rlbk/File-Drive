const express = require("express");
const app = express();

const Port = 3000;

app.get("/", (req, res) => {
  res.send("Backend initialize");
});

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});
