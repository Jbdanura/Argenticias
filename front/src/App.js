import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"

function App() {
  const [news,setNews] = useState([])

  useEffect(()=>{
    const promise = axios.get("http://localhost:3001/news")
    promise.then(response => {
      setNews(response.data) 
    })
  },[])

  console.log(news)

  return (
    <div className="App">
      e
    </div>
  );
}

export default App;
