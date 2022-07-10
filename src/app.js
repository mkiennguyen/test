const connectDatabase = require("./config/db.connect");
const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");
const PORT = 2368;

//connect app with database
connectDatabase();

//template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//file static
app.use(express.static(path.join(__dirname, "public")));

// body-parser
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/", routes());

app.listen(PORT, () => {
  console.log(`server is running at address:http://localhost:${PORT}`);
});
