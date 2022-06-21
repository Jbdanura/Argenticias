require("dotenv").config()

const password = "tatuti90"
const url = "mongodb+srv://jotabe:" + password + "@cluster0.wboco.mongodb.net/?retryWrites=true&w=majority"

module.exports = url