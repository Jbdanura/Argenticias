import './App.css';
import {useState,useEffect} from "react"
import axios from "axios"
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import Home from "./components/Home"
import Category from './components/Category';

function App() {
  const [news,setNews] = useState([])
  const [navMobile, setNavMobile] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(()=>{
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    const promise = axios.get("https://argenticias.herokuapp.com/news/all")
    promise.then(response => {
      setNews(response.data) 
    })
  },[])

  const navMobileStyle =  {
    display: "block",
    marginLeft: "40px",
    marginTop: "20px"
  }

  return (
    <div className="App">
      <Router>
        <div className="nav">
          <a href="/" className="logo">
            <span style={{color:"lightblue"}}>Arg</span><span>e</span><span style={{color:"lightyellow"}}>nti</span>
            <span>c</span><span style={{color:"lightblue"}}>ias</span>
          </a>
          <div className="links" style={screenWidth > 850 ? {display:"flex"} : !navMobile ? {display: "none"} : navMobileStyle}>
            <Link to="/" className={navMobile ? "link-mobile": null}>General</Link> 
            <Link to="/business" className={navMobile ? "link-mobile": null}>Economia</Link>
            <Link to="/entertainment" className={navMobile ? "link-mobile": null} >Entretenimiento</Link>
            <Link to="/health" className={navMobile ? "link-mobile": null}>Salud</Link>
            <Link to="/science" className={navMobile ? "link-mobile": null}>Ciencia</Link>
            <Link to="/sports" className={navMobile ? "link-mobile": null}>Deportes</Link>
            <Link to="/technology" className={navMobile ? "link-mobile": null}>Tecnologia</Link>
          </div>
        <a onClick={()=>setNavMobile(!navMobile)} className="menu" style={screenWidth > 850 ? {display:"none"} :{display:"block"}}>☰</a>
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
