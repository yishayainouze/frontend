import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>

      <Header/>
        <Outlet />
        <Footer/>

    </div>
  );
};

export default Layout;
