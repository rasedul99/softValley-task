import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://crm.softvalley.sveducrm.com/api/admin/login", {
        // Data to be sent to the server
        email: "admin@example.com",
        password: "password",
      })
      .then((response) => {
        const { token } = response.data.data;
        localStorage.setItem("token", token);
        console.log(token);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <form
          className="p-10 bg-slate-100 bg-current rounded-xl drop-shadow-lg space-y-5 "
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-3xl">Soft Valley</h1>
          <div className="flex flex-col space-y-2">
            <label className="text-base font-light text-start">Email</label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="email"
              placeholder="Your Email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col  space-y-2">
            <label className="text-base font-light text-start">Password</label>
            <input
              className="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="password"
              placeholder="Your Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="text-start">
            <input type="checkbox" name="remember" />
            <label className="text-base font-light">Remember me</label>
          </div>

          <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
          >
            Sign In
          </button>
          <div className="flex justify-between text-blue-600 text-base font-light ">
            <Link className="text-primary hover:underline" to="/register">
              Create New Account
            </Link>
            <Link className="hover:underline" to="/recover">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
