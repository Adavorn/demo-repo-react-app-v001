import {HashRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home";
import About from "./components/About";
import Page1 from "./components/Page1";
import NavBar from "./components/NavBar";
9
function App() {
  
  return (
    <>
      <HashRouter> 
        <NavBar/>         
        <Routes>      
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Page1" element={<Page1/>}/>
        </Routes>
    </HashRouter>   
     
    </>
  ); 
}
export default App;
