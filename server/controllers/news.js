const News = require("../models/news")

const newsRouter = require("express").Router()

newsRouter.get("/",async(req,res)=>{
    const news = await News.findOne()
    res.json(news)
})

newsRouter.post("/", async(req,res)=>{
    const news = new News({
        name: "hola"
    })
    news.save().then(savedNews=>res.json(savedNews)).catch(error=> next(error))
    
})

module.exports = newsRouter