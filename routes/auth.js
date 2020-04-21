const express = require("express");
const router = express.Router();
const { signup, signin, signout, requireSignin } = require("../controllers/auth");
const { userSignupValidator } = require("../validator");
const { getAllRecords } = require("../controllers/auth");
const { renderforgotpasswordtemplate, forgotpassword } = require("../controllers/userHandlers.js")

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.get("/getall", getAllRecords)
router.get("/hello",requireSignin, (req, res) => {
	res.send("Hello There!");
});

module.exports = function(app) {
	app.route('/forgotpassword')
	    .get(renderforgotpasswordtemplate)
	    .post(forgotpassword);
}
module.exports = router;
