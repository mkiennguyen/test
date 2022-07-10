const User = require("../models/user.model");

const bcrypt = require("bcrypt");

class userLogin {
  static async userCheck(req, res, user) {
    // login errrors
    const loginErrors = [];

    const { usernameEmail, password } = user;

    /*--- find user in db  
     --------------------------*/
    const findUser = await User.findOne({
      $or: [
        {
          email: usernameEmail,
        },
        {
          username: usernameEmail,
        },
      ],
    });
    /*--- handle user 
     --------------------------*/
    const avaiableUser =
      findUser === null
        ? "UNAVAIABLE"
        : await bcrypt.compare(password, findUser.password);

    if (!usernameEmail || !password) {
      loginErrors.push({ msg: `Error : fields cannot be left blank` });
    } else if (avaiableUser === "UNAVAIABLE" || avaiableUser === false) {
      loginErrors.push({
        msg: `Error : username , email or password not true`,
      });
    } else {
      return res.redirect("/");
    }
    res.render("layout/layout", {
      template: "login",
      pageTitle: "login",
      loginErrors,
    });
  }
}

module.exports = userLogin;
