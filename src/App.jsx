import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Navbar from './components/Navbar.jsx'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Product from "./pages/Product";

const App = () => {
    const [itemCount, setItemCount] = useState(0);
    const [itemsToAdd, setItemsToAdd] = useState(1);
    
    const addToCart = () => {
        setItemCount(itemCount + itemsToAdd);
    }

    const decrementCount = () => {
        itemsToAdd !== 1 && setItemsToAdd(itemsToAdd - 1)
    }

    const incrementCount = () => {
        itemsToAdd !== 9 && setItemsToAdd(itemsToAdd + 1)
    }


  return (
    <BrowserRouter>
        <Navbar numItems={itemCount} />
        <Routes>
            <Route path='/' element={<Home />} errorElement={<Error />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/shop/:title' element={<Product addToCart={addToCart} itemsToAdd={itemsToAdd} incrementCount={incrementCount} decrementCount={decrementCount} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
