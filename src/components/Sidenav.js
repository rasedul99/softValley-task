import React from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold">
          <span className="text-orange-500">
            {" "}
            <span className="text-2xl">S</span>OFT
          </span>{" "}
          <span className="text-blue-700">
            <span className="text-2xl">V</span>ALLEY
          </span>
        </h1>
        <div className="flex gap-2 items-center">
          <CgProfile />
          <div>
            <p>Hello ! Good Evening </p>
            <p>Admin</p>
          </div>
        </div>
      </div>

      <div>
        <ul className="">
          <li className="">
            <NavLink to="/dashboard">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? " flex items-center gap-2 bg-slate-500  p-2"
                      : "flex items-center gap-2 p-2"
                  }
                >
                  {" "}
                  <CgProfile />
                  <p>Dashboard</p>
                </span>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/Leads">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? " flex items-center gap-2 bg-slate-500 p-2"
                      : "flex items-center gap-2 p-2"
                  }
                >
                  {" "}
                  <CgProfile />
                  <p>Leads</p>
                </span>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/customer">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? " flex items-center gap-2 bg-slate-500  p-2"
                      : "flex items-center gap-2 p-2"
                  }
                >
                  {" "}
                  <CgProfile />
                  <p>Customer</p>
                </span>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/sales">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? " flex items-center gap-2 bg-slate-500 p-2"
                      : "flex items-center gap-2 p-2"
                  }
                >
                  {" "}
                  <CgProfile />
                  <p>Sales</p>
                </span>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/expense">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? " flex items-center gap-2 bg-slate-500 p-2"
                      : "flex items-center gap-2 p-2"
                  }
                >
                  {" "}
                  <CgProfile />
                  <p>Expense</p>
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
