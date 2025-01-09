const express = require("express");
const userRouter = require("./routes/user.route");
const config = require("./config");
const connectToDb = require("./config/db");

const app = express();
connectToDb();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.listen(config.port, () => {
  console.log(`Server is listening on port ${config.port}`);
});
