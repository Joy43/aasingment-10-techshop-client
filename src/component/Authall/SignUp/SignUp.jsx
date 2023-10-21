

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { AuthContext } from "../../../ProviderVarify/Provider";
const SignUp = () => {
  // daynamically data
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password, name);

    // cheak length 6 character
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Please use a minimum of 6 characters for the password",
      });
      return;
    }
   
    if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      // Display SweetAlert for password without a special character
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Please include special character in the password.",
      });
      return; // Stop further execution
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "You can must use Capital letter ",
      });
      return;
    }

    // registation user create

    createUser(email, password)
      .then((result) => {
        console.log(result);
        if(result.user){
          Swal.fire(
            'Register  successfull',
            'Welcome to my Website',
            'success'
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
        <Player
  autoplay
  loop
  src="https://lottie.host/d6e8f388-0dda-4341-bb1a-646d8ad2feba/oz2mSixqv2.json"
  style={{ height: '450px', width: '350px' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder=" your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder=" Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                {/* forgot password */}
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
                {/* ------------------------------ */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            {/* ------------------------- */}

            <div>
              <p>
                Already have an account ! please{" "}
                <Link className="text-blue-700 font-bold text-xl" to="/login">
                  Login
                </Link>
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
