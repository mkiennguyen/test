require("dotenv").config();
const mongoose = require("mongoose");

const user = process.env.USER_DB;
const password = process.env.PASSWORD_DB;
const dbName = "form";

const db = `mongodb+srv://${user}:${password}@cluster0.e5nv6.mongodb.net/?retryWrites=true&w=majority`;

const connectDatabase = () => {
  mongoose
    .connect(db)
    .then((data) => console.log("connect db success"))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
