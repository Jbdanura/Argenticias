import { useEffect, useState } from "react"
import { useParams } from "react-router"
import axios from "axios"

const Category = () => {
    const [articles,setArticles] = useState([])
    const category = useParams().category

    useEffect(()=>{
        axios.get(`http://localhost:3001/news/${category}`)
        .then(response =>{
            setArticles(response.data)
        })
    },[category])


    return(
        <div className="articles">
            {articles.map(article=>{
                if(article.description){
                    return <div className="article" key={article.title}>
                        <img src={article.urlToImage}></img>
                        <div className="info">
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                        </div>
                    </div>
                }
            })}
        </div>
    )
}

export default Category