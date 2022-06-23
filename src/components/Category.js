import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"
import Article from "./Article"

const Category = () => {
    const [articles,setArticles] = useState([])
    const category = useParams().category

    useEffect(()=>{
        axios.get(`https://argenticias.herokuapp.com/news/${category}`)
        .then(response =>{
            setArticles(response.data)
        })
    },[category])


    return(
        <div className="articles">
            {articles.map(article=>{
                if(article.description){
                    return <Article key={article.title} article={article}/>
                }
            })}
        </div>
    )
}

export default Category