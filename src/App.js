import React from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup.jsx';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from "./Components/Nav.jsx";
import Protectedroute from "./Components/Protectedroute.js";
import Baseform from "./Components/Database demo/Baseform.jsx";
import Products from "./Components/Database demo/Products.jsx";
import Mydemo from './Demo/Mydemo.jsx'

function App() {
  return (
    <>
     {/* <Mydemo/> */}
      {/* <Baseform/> */}
      {/* <Products/> */}
      
       <BrowserRouter> 
        <Nav/> 
        <Routes>
          <Route path="/products" element={<Products/>}/>
           <Route path="/" element={<Protectedroute child={<Home />} />} />
          <Route path="/home" element={<Protectedroute child={<Home />} />} />
          <Route path="/login" element={<Login />} />        
          <Route path="/sign" element={<Signup />} />
        </Routes>
      </BrowserRouter> 


    </>
  );
}

export default App;
