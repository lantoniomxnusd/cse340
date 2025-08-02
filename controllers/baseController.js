const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function (req, res){
    const nav = await utilities.getNav()
    res.render("index", {title: "Home", nav})
}

baseController.intentionalError = function(req,res, next) {
    throw new Error ("Intentional server Error for testign 500 page");
}
module.exports = baseController