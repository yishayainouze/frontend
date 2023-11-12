import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Sign_in from "./pages/Sign-in/sign-in";
import Sign_up from "./pages/Sign-up/Sign-up";
import Product_Page from "./pages/Product_Page/Product_Page";
import Compare_products from "./pages/Compare_products/compare_products";
function App() {
  
  return (
    <>

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sign_in" element={<Sign_in />} />
                <Route path="/Sign_up" element={<Sign_up />} />
                <Route path="/Product_Page" element={<Product_Page />} />
                <Route path="/compare_products" element={<Compare_products />} />
                {/* <Route path="/Delete" element={<Delete />} /> */}
            </Routes>
        </Router>

    </>

)
}


export default App;
