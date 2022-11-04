import { React, useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "./../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-3 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-success" type="submit" value="Login" />
            </div>
            <small>
              Don't have an account?{" "}
              <Link className="text-success text-xl ml-2" to="/signup">
                Signup
              </Link>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
