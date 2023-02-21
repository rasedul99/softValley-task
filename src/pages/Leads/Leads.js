import axios from "axios";
import { addDays, format, formatISO } from "date-fns";

import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFullscreen } from "react-icons/md";
import AssignessDropdown from "../../components/AssignessDropdown";
import ContactedDate from "../../components/ContactedDate";
import LeadData from "../../components/LeadData";
import SearchBar from "../../components/SearchBar";
import SourcesDropdown from "../../components/SourcesDropdown";
import StatusesDropdown from "../../components/StatusesDropdown";

const Leads = () => {
  const [search, setSearch] = useState("");
  const [leads, setLeads] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedsources, setSelectedsources] = useState([]);
  const [selectedassignes, setSelectedassignes] = useState([]);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);
  const { startDate, endDate } = date[0];
  const contacted_date_from = formatISO(startDate).toString();
  const contacted_date_to = formatISO(endDate).toString();
  const contactedDate = format(date[0].startDate, "dd/MM/yyyy").concat(
    "-",
    format(date[0].endDate, "dd/MM/yyyy")
  );
  const inputData = {
    search: search,
    lead_status_id: selectedStatuses,
    source_id: selectedsources,
    user_id: selectedassignes,
    contacted_date_from: contacted_date_from,
    contacted_date_to: contacted_date_to,
  };
  const baseApi = "http://crm.softvalley.sveducrm.com/";
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    getLeads();
  }, []);
  async function getLeads() {
    const result = await axios
      .post(`${baseApi}api/admin/lead/list?page=1&limit=10`, inputData, config)
      .then((res) => setLeads(res.data.data.data))
      .catch((err) => console.log(err));
  }
  const handleFilter = () => {
    getLeads();
  };
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div className="mx-3">
          <p className="font-semibold">Leads</p>
          <p>Difficulties increase the nearer we get to the goal</p>
        </div>
        <div className="flex gap-2">
          <MdOutlineFullscreen size="20" />
          <CgProfile size="20" />
        </div>
      </div>
      <div className="bg-slate-100 p-3 my-2">
        <SearchBar search={search} setSearch={setSearch} />
      </div>
      <div className="flex gap-2 items-center relative mx-3">
        <StatusesDropdown
          selectedStatuses={selectedStatuses}
          setSelectedStatuses={setSelectedStatuses}
        />
        <SourcesDropdown
          selectedsources={selectedsources}
          setSelectedsources={setSelectedsources}
        />
        <AssignessDropdown
          selectedassignes={selectedassignes}
          setSelectedassignes={setSelectedassignes}
        />
        <ContactedDate
          date={date}
          setDate={setDate}
          contactedDate={contactedDate}
        />
        <button
          onClick={handleFilter}
          className="bg-slate-500 text-white py-[5px] px-10 rounded"
        >
          Filter
        </button>
        <button className="text-gray-400 px-6 py-[5px] rounded border">
          Reset Filter
        </button>
      </div>
      {/* table leads */}
      <LeadData leads={leads} />
    </div>
  );
};

export default Leads;
