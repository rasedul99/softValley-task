import React from "react";
import { BiUser } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDashboard, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiUserSearchLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  const navItems = [
    { navTitle: "Dashboard", path: "dashboard", Icon: MdDashboard },
    { navTitle: "Leads", path: "leads", Icon: RiUserSearchLine },
    { navTitle: "Customer", path: "customer", Icon: FiUsers },
    { navTitle: "Sales", path: "sales", Icon: GiTakeMyMoney },
    {
      navTitle: "Expense",
      path: "expense",
      Icon: MdOutlineAccountBalanceWallet,
    },
  ];
  return (
    <div>
      <div className="flex flex-col  gap-2 p-3 border-b border-slate-100 ">
        <h1 className="font-bold text-xl mx-2 italic">
          <span className="text-orange-500">
            {" "}
            <span className="text-3xl">S</span>OFT
          </span>{" "}
          <span className="text-blue-700">
            <span className="text-3xl">V</span>ALLEY
          </span>
        </h1>
        <div className="flex gap-2 items-center">
          <div className="bg-slate-400 p-3 rounded-full">
            {" "}
            <BiUser />
          </div>

          <div>
            <p>Hello ! Good Evening </p>
            <p>Admin</p>
          </div>
        </div>
      </div>

      <div>
        <ul className="">
          {navItems.map((item) => {
            const { navTitle, path, Icon } = item;
            console.log(Icon);
            return (
              <li key={navTitle}>
                <NavLink to={path}>
                  {({ isActive }) => (
                    <span
                      className={
                        isActive
                          ? " flex items-center gap-2 bg-slate-500  p-3 text-white"
                          : "flex items-center gap-2 p-3"
                      }
                    >
                      <Icon />
                      <p>{navTitle}</p>
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
          {/* <li className="">
            <NavLink to="/dashboard">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? " flex items-center gap-2 bg-slate-500  p-3 text-white"
                      : "flex items-center gap-2 p-3"
                  }
                >
                  {" "}
                  <MdDashboard />
                  <p>Dashboard</p>
                </span>
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/leads">
              {({ isActive }) => (
                <span
                  className={
                    isActive
                      ? " flex items-center gap-2 bg-slate-500 p-3 text-white"
                      : "flex items-center gap-2 p-3"
                  }
                >
                  {" "}
                  <RiUserSearchLine />
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
                      ? " flex items-center gap-2 bg-slate-500  p-3 text-white"
                      : "flex items-center gap-2 p-3"
                  }
                >
                  {" "}
                  <FiUsers />
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
                      ? " flex items-center gap-2 bg-slate-500 p-3 text-white"
                      : "flex items-center gap-2 p-3"
                  }
                >
                  {" "}
                  <GiTakeMyMoney />
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
                      ? " flex items-center gap-2 bg-slate-500 p-3 text-white"
                      : "flex items-center gap-2 p-3"
                  }
                >
                  {" "}
                  <MdOutlineAccountBalanceWallet />
                  <p>Expense</p>
                </span>
              )}
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
