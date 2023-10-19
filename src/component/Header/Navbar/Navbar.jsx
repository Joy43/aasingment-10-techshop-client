
import {  NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {

    const navlinks=<div className="font-bold text-xl">
 <li> <NavLink to="/">Home</NavLink></li>
 <li> <NavLink to="/addphone">AddPhone</NavLink></li>
    <li> <NavLink to="/register">Registation</NavLink></li>
    <li> <NavLink to="/login">Login</NavLink></li>
    <li> <NavLink to="/card">card</NavLink></li>
    <li> <NavLink to="/error">programming</NavLink></li>

</div>
    return (
        
            <div>
            <div className="navbar  bg-[#331800]">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" 
        stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
        {
            navlinks
        }
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl title-animation ">Technology & Electronics</a>
  </div>
  <div className="navbar-end gap-8">
  {/*------------------ google sign in btn */}
{/* <div className="inline-flex gap-2 p-1 relative bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% from-indigo-300">
<span className=" text-xl text-white font-bold rounded-sm   ">Join with</span>
<GooogleVarify></GooogleVarify>
</div> */}
 {/* --------------signout----------------------- */}
     {/* icon men */}
     <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
  <div className="w-10 rounded-full">
       <img src="https://i.ibb.co/Dzmdwrg/profile.jpg"alt="" />

       </div>
       
      </label>
{/* {

    user?
    <button  onClick={handleLogout} className="btn"> Sign out </button>
    :
    <Link to="/login"> <a className="btn">Login</a></Link>
} */}
  </div>
</div>

{/*  card*/}


        </div>
        
    );
};

export default Navbar;