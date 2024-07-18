import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout.jsx";
import { useState } from "react";
import data from "./data/data.js";

const App = () => {
  const [items, setItems] = useState(1);

  const addToCart = (title, price, count) => {
    const result = data.find((item) => item.name == title);
    if (result) {
      result.count += count;
    } else {
      data.push({ name: title, price: price, count: count });
    }

    let counter = 0;
    data.map((item) => (counter += 1 * item.count));
    setItems(counter);
  };

  const removeFromCart = (title) => {
    const index = data.indexOf(data.find((item) => item.name == title));
    const amountToRemove = data[index].count;
    data.splice(index, 1);
    setItems(items - amountToRemove);
  };

  return (
    <BrowserRouter>
      <Navbar items={items} />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />} />
        <Route path="/shop" element={<Shop />} />
        <Route
          path="/shop/:title"
          element={<Product items={items} addToCart={addToCart} />}
        />
        <Route
          path="/checkout"
          element={<Checkout removeFromCart={removeFromCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
