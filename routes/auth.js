const express = require("express");
const router = express.Router();

const { signup, signin, signout, requireSignin } = require("../controllers/auth");
const { userSignupValidator } = require("../validator");
const { getAllRecords } = require("../controllers/auth");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/getall", getAllRecords)
router.get("/hello",requireSignin, (req, res) => {
	res.send("Hello There!");
});

module.exports = router;
