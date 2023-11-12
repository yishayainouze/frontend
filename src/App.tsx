import "./App.css";
import {CssBaseline} from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import Layout from "./pages/Layout";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CssBaseline/>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Sign />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/compare" element={<Compare />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
