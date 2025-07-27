const pool = require("..//database/")

/* ***************************
 *  Get all classification data
 * ************************** */
async function getclassification(){
    return await pool.query("SELECT * FROM public.classification ORDER BY classification_name")
}

module.export = {getclassification}