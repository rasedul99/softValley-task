import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFullscreen } from "react-icons/md";

const Leads = () => {
  return (
    <div>
      <div className="flex justify-between items-center mx-3">
        <div>
          <p>Leads</p>
          <p>Difficulties increase the nearer we get to the goal</p>
        </div>
        <div className="flex gap-2">
          <MdOutlineFullscreen />
          <CgProfile />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Leads;
