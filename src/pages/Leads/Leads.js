import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFullscreen } from "react-icons/md";

const Leads = () => {
  const [leads, setLeads] = useState("");
  return (
    <div className="mx-3">
      <div className="flex justify-between items-center">
        <div>
          <p>Leads</p>
          <p>Difficulties increase the nearer we get to the goal</p>
        </div>
        <div className="flex gap-2">
          <MdOutlineFullscreen />
          <CgProfile />
        </div>
      </div>
      <div className="bg-slate-200 p-2 my-2">
        <div className="flex justify-between max-w-xs rounded   p-1  border border-slate-300">
          <input
            placeholder="Search in leads table...."
            className="outline-none bg-slate-200"
            value={leads}
            onChange={(e) => setLeads(e.target.value)}
          />
          <span>
            <CiSearch size="20" />
          </span>
        </div>
      </div>

      {/* <div>
        <div className="flex justify-between max-w-xs rounded   p-1  border border-slate-300">
          <input
            placeholder="Search in leads table...."
            className="outline-none bg-slate-200"
            value={leads}
            onChange={(e) => setLeads(e.target.value)}
          />
          <span>
            <CiSearch size="20" />
          </span>
        </div>
      </div> */}
    </div>
  );
};

export default Leads;
