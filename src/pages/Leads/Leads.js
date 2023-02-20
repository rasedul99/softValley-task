import React from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFullscreen } from "react-icons/md";
import AssignessDropdown from "../../components/AssignessDropdown";
import ContactedDate from "../../components/ContactedDate";
import LeadData from "../../components/LeadData";
import SearchBar from "../../components/SearchBar";
import SourcesDropdown from "../../components/SourcesDropdown";
import StatusesDropdown from "../../components/StatusesDropdown";

const Leads = () => {
  return (
    <div className="mx-3">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold">Leads</p>
          <p>Difficulties increase the nearer we get to the goal</p>
        </div>
        <div className="flex gap-2">
          <MdOutlineFullscreen size="20" />
          <CgProfile size="20" />
        </div>
      </div>
      <div className="bg-slate-100 p-2 my-2">
        <SearchBar />
      </div>
      <div className="flex gap-2 items-center relative">
        <StatusesDropdown />
        <SourcesDropdown />
        <AssignessDropdown />
        <ContactedDate />
        <button className="bg-slate-500 text-white  px-10 rounded">
          Filter
        </button>
        <button className="text-gray-400 px-6  rounded border">
          Reset Filter
        </button>
      </div>
      Table data
      <LeadData />
    </div>
  );
};

export default Leads;
