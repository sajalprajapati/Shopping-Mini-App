import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import {Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
       <div>
         <Navbar/>
       </div>

       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
       </Routes>
    </div>
  )
}

export default App 