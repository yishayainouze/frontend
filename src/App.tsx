import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Sign_in from "./pages/sign-in/sign-in";

function App() {
  
  return (
    <>

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Sign_in" element={<Sign_in />} />
                {/* <Route path="/Delete" element={<Delete />} /> */}
            </Routes>
        </Router>

    </>

)
}


export default App;
