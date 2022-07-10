const router = require("express").Router();
const Login = require("../controllers/login.controller");

module.exports = () => {
  // render a form
  router.get("/", Login.loginPage);

  // login
  router.post("/", Login.login);
  return router;
};
