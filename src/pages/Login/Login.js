import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <div
        class="w-screen h-screen flex justify-center items-center
    bg-white"
      >
        <form
          class="p-10 bg-slate-100 bg-current rounded-xl drop-shadow-lg space-y-5"
          action=""
        >
          <h1 class="text-center text-3xl">Soft Valley</h1>
          <div class="flex flex-col space-y-2">
            <label class="text-base font-light text-start" for="email">
              Email
            </label>
            <input
              class="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
            />
          </div>
          <div class="flex flex-col  space-y-2">
            <label class="text-base font-light text-start" for="password">
              Password
            </label>
            <input
              class="w-96 px-3 py-2 rounded-md border border-slate-400"
              type="password"
              placeholder="Your Password"
              name="password"
              id="password"
            />
          </div>

          <div className="text-start">
            <input type="checkbox" name="remember" id="remember" />
            <label class="text-base font-light" for="remember">
              Remember me
            </label>
          </div>

          <button
            class="w-full px-10 py-2 bg-blue-600 text-white rounded-md
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
