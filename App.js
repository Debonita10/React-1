import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import Login from './component/Login';
// import { Router, useNavigate } from 'react-router-dom';
import Clothing from './component/Clothing';
// import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter
import Slider from './component/Slider';
import Home from './component/Home';
import Category from './component/Category';
import Subfooter from './component/Subfooter';
import Electronics from './component/Electronics';
import Homekit from './component/Homekit';
import Beauty from './component/Beauty';
import Games from './component/Games';
import Books from './component/Books';
import Grocery from './component/Grocery';
import Slickerslider from './component/Slickerslider';
import Newproductgro from './component/Newproductgro';
import Dresspro from './component/Dresspro';
import Newone from './component/Newone';
import Contactus from './component/Contactus';
import Cart from './component/Cart';
import { ThemeProvider } from "styled-components";




function App() {
  const theme = {
    colors: {
      black: "#000000", // Define black color
      white: "#FFFFFF",
      primary: "#ff6347", // You can add more colors if needed
    },
    media: {
      mobile: "768px",
      tab: "998px",
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Router> {/* Ensure all routes are inside Router */}
      <div>
        
         
      <Header/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/Clothing" element={<Clothing/>} />
          <Route path="/Category" element={<Category/>} />
          <Route path="/electronics" element={<Electronics/>} />
          <Route path="/homekit" element={<Homekit/>} />
          <Route path="/beauty" element={<Beauty/>} />
          <Route path="/games" element={<Games/>} />
          <Route path="/books" element={<Books/>} />
          <Route path="/grocery" element={<Grocery/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/cart" element={<Cart/>} />

        </Routes>
        <Footer/>
      
       
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;

