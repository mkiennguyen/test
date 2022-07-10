class Home {
  // home page
  static home = (req, res) => {
    res.render("layout/layout", {
      template: "home",
      pageTitle: "welcome to my page ",
      user: [],
    });
  };
}

module.exports = Home;
