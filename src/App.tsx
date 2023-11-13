import "./App.css";

import { GlobalState } from "./state";
import { CssBaseline } from "@mui/material";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Sign from "./pages/Sign";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import Layout from "./pages/Layout";

import ProductCard from "./components/ProductTemp";
import { useSelector } from "react-redux";

function App() {

  const data = useSelector((state: { global: GlobalState }) => state.global.products);
  console.log(data);
  
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home/>} />

            <Route path="/products" element={<Products />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Sign />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/compare" element={<Compare />} />

            <Route path="/pt" element={<ProductCard />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
