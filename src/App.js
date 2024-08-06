import { useState } from "react";
import Cards from "./components/cards/cards";
import Details from "./components/details/details";
import Header from "./components/header/header";
import Home from "./components/pages/home/home";
import PecialProducts from "./components/pages/specialProducts/specialProducts";
import {Routes,Route} from "react-router-dom"

function App() {
  const [toggle,settoggle]=useState(true)
  const handeltoggle=(e)=>{
    settoggle(e)
  }
  return (
    <div className="App">

      
      <Header toggle={toggle}/>
      <Routes>
      <Route path='/' element={<Home handel={handeltoggle}/>}/>
      <Route path='/products/:id' element={<PecialProducts/>}/>
      <Route path='/item/:topic/:id' element={<Details handel={handeltoggle}/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
