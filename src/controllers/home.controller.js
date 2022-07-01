const User = require("../models/user.model");

class Home {
  static login(req, res) {
    res.status(200);
    res.render("login");
  }
  static register(req, res) {
    res.status(200);
    res.render("register");
  }
  static home(req, res) {
    res.render("home");
  }
}

module.exports = Home;
