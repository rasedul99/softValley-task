import React from "react";
import { CgProfile } from "react-icons/cg";

const Sidenav = () => {
  return (
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
  );
};

export default Sidenav;
