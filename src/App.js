
import './App.css';
import {Route,Routes, BrowserRouter } from 'react-router-dom';
import ProductPage from './Components/ProductPage';
import CheckoutPage from './Components/CheckoutPage';
import {ChakraProvider} from '@chakra-ui/react'
import React from 'react'
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import About from './Components/About';
export default function App() {
  let [userCart,addToCart] = React.useState([])
  
  return (
  <>
  <ChakraProvider>
    <About></About>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/product" element={<ProductPage addToCart={addToCart} cart={userCart}/>}></Route>
    <Route path="/checkout" element={<CheckoutPage cart={userCart}/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
  </Routes>
  </ChakraProvider>
  </>
  );
}

