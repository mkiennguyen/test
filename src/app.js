const connectDatabase = require("./config/db.connect");
const express = require("express");
const app = express();
const path = require("path");

const routers = require("./routes/routes");
// port server
const PORT = 8000;
//connect app with database
connectDatabase();
//template engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//file static
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use(routers);

// body-parser
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`server is running at address:http://localhost:${PORT}`);
});

console.log("hello world");
