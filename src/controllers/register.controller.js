const userRegister = require("../services/resgisterServices");

class Signup {
  //method get: "signup/" signup page
  static registerPage = (req, res) => {
    res.render("layout/layout", {
      template: "signup",
      pageTitle: "Sign up",
      registerErrors: [],
    });
  };

  // method post : "resgiter/" user register

  static register = (req, res) => {
    const user = req.body;
    // errors

    // resgister
    userRegister.check(req, res, user);
  };
}

module.exports = Signup;
