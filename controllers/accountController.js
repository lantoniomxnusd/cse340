/* *********************************
* Account contorller
* Unit 4, deliver Login view activity
* ********************************* */
const utilities = require('../utilities')

/* *********************************
* Account contorller
* Unit 4, deliver Login view activity
* ********************************* */
async function buildLogin(req, res, next) {
    let nav = await utilities.getNav()
    res.render("account/login", {
        title:"Login",
        nav,
    })
}

/* *********************************
* Account contorller
* Unit 4, deliver Register view activity
* ********************************* */
async function buildRegister(req, res, next) {
  let nav = await utilities.getNav()
  res.render("account/register", {
    title: "Register",
    nav,
    errors: null,
  })
}

module.exports = { buildLogin, buildRegister }