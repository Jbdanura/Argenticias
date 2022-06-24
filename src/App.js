import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import {BrowserRouter as HashRouter, Route, Link, Routes} from "react-router-dom"
import Home from "./components/Home"
import Category from './components/Category';

function App() {
  const [news,setNews] = useState([])

  useEffect(()=>{


    const promise = axios.get("https://argenticias.herokuapp.com/news/all")
    promise.then(response => {
      setNews(response.data) 
    })
  },[])



  return (
    <div className="App">
      <HashRouter>
        <div className="nav">
          <a href="/" className="logo">
            <span style={{color:"lightblue"}}>Arg</span><span>e</span><span style={{color:"lightyellow"}}>nti</span>
            <span>c</span><span style={{color:"lightblue"}}>ias</span>
          </a>
          <div className="links">
            <Link to="/" >General</Link> 
            <Link to="/business" >Economia</Link>
            <Link to="/entertainment" >Entretenimiento</Link>
            <Link to="/health" >Salud</Link>
            <Link to="/science" >Ciencia</Link>
            <Link to="/sports" >Deportes</Link>
            <Link to="/technology" >Tecnologia</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home articles={news}/>}/>
          <Route path="/:category" element={<Category/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
