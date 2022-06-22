const Home = ({articles}) => {
    return (
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

export default Home