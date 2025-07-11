import React from 'react'
import Product from './pages/Product/Product.jsx'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx'
import Orders from './pages/Orders/Orders.jsx'
import Cart from './pages/Cart/Cart.jsx'
import Collections from './pages/Collection/Collections.jsx'
import About from './pages/About/About.jsx'
import Home from './pages/Home/Home.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Login from './pages/Login/Login.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import Navbar from './components/Navbar.jsx'
import {Routes, Route } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/place-order' element={<PlaceOrder />}/>
        <Route path='/Contact' element={<Contact/>} /> 
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/collections' element={<Collections />} /> 
      </Routes>
      <Footer />
    </div>
  )
}

export default App
