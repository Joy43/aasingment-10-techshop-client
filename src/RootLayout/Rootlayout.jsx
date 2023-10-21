import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";
import Footer from "../component/Home/Footer/Footer";

const Rootlayout = () => {
    return (
        <div className="max-6xl p-6 mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
    <Footer></Footer>
        </div>
    );
};

export default Rootlayout;