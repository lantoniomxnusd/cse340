/* *********************************
* Account contorller
* Unit 4, deliver Login view activity
* ********************************* */
const utilities = require('../utilities')

/* *********************************
* Account contorller
* Unit 4, deliver Login view activity
* ********************************* */
async function buildLogin(req, res) {
    let nav = await utilities.getNav()
    res.render("account/login", {
        title:"Login",
        nav,
    })
}

module.exports = { buildLogin }