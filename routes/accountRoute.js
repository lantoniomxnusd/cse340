/* *********************************
* Account routes
*Unit 4, deliver login view activity
* ********************************* */
// Needed Resources 
const express = require("express")
const router = new express.Router()
const utilities = require("../utilities")
const accountController = require("../controllers/accountController")


/* *********************************
* Deliver login view
* ********************************* */
// Route to build login view
router.get("/login", utilities.handleErrors(accountController.buildLogin))

// Route to build register view
router.get("/register", utilities.handleErrors(accountController.buildRegister))

module.exports = router;

