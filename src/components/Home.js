import Article from "./Article"

const Home = ({articles}) => {
    return (
        <div className="articles">
            {articles.map(article=>{
                if(article.description){
                    return <Article key={article.title} article={article}/>
                }
            })}
        </div>
    )
}

export default Home