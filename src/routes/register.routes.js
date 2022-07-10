const router = require("express").Router();
const Signup = require("../controllers/register.controller");

module.exports = () => {
  // render a form
  router.get("/", Signup.registerPage);

  // signup
  router.post("/", Signup.register);
  return router;
};
