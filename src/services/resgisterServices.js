const User = require("../models/user.model");

const bcrypt = require("bcrypt");
const saltRounds = 10;

class userRegister {
  static check = async (req, res, user) => {
    const { username, email, password, verifypassword } = user;

    //store errors
    const registerErrors = [];

    // hash info of the user
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const checkUseInfo = await User.find({
      username,
      email,
    });

    if (!username || !email || !password || !verifypassword) {
      registerErrors.push({ msg: `Error : blanks are not allowed` });
    }
    // check length
    else if (
      (username.length, email.length, password.length, verifypassword.length) <
      6
    ) {
      registerErrors.push({ msg: `Error : must greater than 6 characters` });
    }

    // verify password
    else if (password !== verifypassword) {
      registerErrors.push({ msg: "Error : verify password failed" });
    }

    // check user
    else if (checkUseInfo.length > 0) {
      registerErrors.push({
        msg: `Error : username or email already exist . try again. `,
      });
    }

    // add user
    else {
      const newUser = new User({
        email,
        username,
        password: hashedPassword,
      });
      await newUser.save();
      registerErrors.push({ msg: "Your account has been created" });
    }
    res.render("layout/layout", {
      template: "signup",
      pageTitle: "Sign up",
      registerErrors,
    });
  };
}

module.exports = userRegister;
