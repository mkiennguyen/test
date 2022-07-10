require("dotenv").config();
const mongoose = require("mongoose");

const user = process.env.USER_DB;
const password = process.env.PASSWORD_DB;
const dbName = "form";

const db = `mongodb+srv://${user}:${password}@cluster0.e5nv6.mongodb.net/?retryWrites=true&w=majority`;

const connectDatabase = async () => {
  try {
    const data = await mongoose.connect(db);
    console.log("Mongodb connected!");
  } catch (err) {
    console.log(`CONNECT MONGO SERVER FAILED : ${err}`);
  }
};

module.exports = connectDatabase;
