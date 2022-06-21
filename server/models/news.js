const mongoose = require("mongoose")

const newsSchema = new mongoose.Schema({
    name: String
})

const News = mongoose.model("News",newsSchema)

module.exports = News