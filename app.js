const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();

const Port = 3000;

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.listen(Port, () => {
  console.log(`Server is listening on port ${Port}`);
});
