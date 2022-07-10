const userLogin = require("../services/loginServices");

class Login {
  // ------login page----------//
  static loginPage = (req, res) => {
    res.render("layout/layout", {
      template: "login",
      pageTitle: "Login",
      loginErrors: [],
    });
  };
  //------login---------------//
  static login = async (req, res) => {
    const user = req.body;

    userLogin.userCheck(req, res, user);
  };
}

module.exports = Login;
