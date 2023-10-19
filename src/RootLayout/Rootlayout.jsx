import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";

const Rootlayout = () => {
    return (
        <div className="max-6xl p-6 mx-auto">
         <Navbar></Navbar>
         <Outlet></Outlet>
    
        </div>
    );
};

export default Rootlayout;