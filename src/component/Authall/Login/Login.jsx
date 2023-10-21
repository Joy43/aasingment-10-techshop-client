
import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

import { Player, Controls } from '@lottiefiles/react-lottie-player';
 import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../ProviderVarify/Provider";

const Login = () => {
 const {signIn}=useContext(AuthContext)
 const location= useLocation();
 const navigate =useNavigate()
 console.log('location in the login', location )
 const [showPassword, setShowPassword] = useState(false);
 

// handle login
const Handesign=e=>{
  // -----------------loading off-----------------------------//
  e.preventDefault();
 

  console.log(e.currentTarget)
  const form=new FormData(e.currentTarget);
  const email=form.get('email')
  const password=form.get('password')
  console.log(email,password)
  console.log(form.get('email'));
  console.log(form.get('password'));

  
  signIn(email,password)
.then(result=>{
  console.log(result.user)

  if (result.user.email) {
    Swal.fire(
      'Login success!',
      'Welcome to my Website',
      'success'
    );
  } 
  // NAVIGATE
  
  navigate(location?.state?location.state:'/');
})

.catch(error => {
  
  console.error(error);
  Swal.fire(
    'Login failed',
    'Email or password is incorrect',
    'error'
  );

});

}




    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <Player
  autoplay
  loop
  src="https://lottie.host/dc750fb7-d19d-4101-8e8b-2e1cbb2fafff/hBBDsjD7yC.json"
  style={{ height: '350px', width: '350px' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        
<form onSubmit={Handesign}>


<div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
           name='email'
           type="email" 
           placeholder="email" 
           className="input input-bordered"
           required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="showbtn inline-flex gap-2 relative ">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <span
                    className="mt-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <BsEyeSlashFill></BsEyeSlashFill>
                    ) : (
                      <BsEyeFill></BsEyeFill>
                    )}
                  </span>
                </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
</form>
{/* ---------------- */}
<div>
<p>Already have an account ! please <Link className="text-blue-700 font-bold text-xl" to="/signup">Register</Link></p>
     </div>
     {/* --------------------- */}
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;