import "./App.css";
import { GlobalState } from "./state";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import Layout from "./pages/Layout";
import { useSelector } from "react-redux";
import IsraelMap from "./pages/Map";

function App() {
  // Assuming that your state structure has a "global" property
  const data = useSelector((state: { global: GlobalState }) => state.global.products);
  console.log(data);

  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/Map" element={<IsraelMap />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
