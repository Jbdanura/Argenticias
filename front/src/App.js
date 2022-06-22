import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import Home from "./components/Home"
import Category from './components/Category';

function App() {
  const [news,setNews] = useState([])

  useEffect(()=>{
    const promise = axios.get("http://localhost:3001/news/all")
    promise.then(response => {
      setNews(response.data) 
    })
  },[])


  return (
    <div className="App">
      <Router>
        <div className="nav">
          <Link to="/">General</Link>
          <Link to="/business">Economia</Link>
          <Link to="/entertainment">Entretenimiento</Link>
          <Link to="/health">Salud</Link>
          <Link to="/science">Ciencia</Link>
          <Link to="/sports">Deportes</Link>
          <Link to="/technology">Tecnologia</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home articles={news}/>}/>
          <Route path="/:category" element={<Category/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
