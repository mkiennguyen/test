const router = require("express").Router();

const Home = require("../controllers/home.controller");
const Login = require("../routes/login.routes");
const Register = require("./register.routes");

module.exports = () => {
  router.get("/", Home.home);
  router.use("/login", Login());
  router.use("/register", Register());
  return router;
};
