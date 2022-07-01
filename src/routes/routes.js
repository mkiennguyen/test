const router = require("express").Router();

const Home = require("../controllers/home.controller");

router.get("/", Home.home);

router.get("/register", Home.register);

router.get("/login", Home.login);

module.exports = router;
