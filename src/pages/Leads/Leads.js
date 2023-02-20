import axios from "axios";
import { addDays, format } from "date-fns";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFullscreen } from "react-icons/md";
import AssignessDropdown from "../../components/AssignessDropdown";
import ContactedDate from "../../components/ContactedDate";
import LeadData from "../../components/LeadData";
import SearchBar from "../../components/SearchBar";
import SourcesDropdown from "../../components/SourcesDropdown";
import StatusesDropdown from "../../components/StatusesDropdown";

const Leads = () => {
  const [selectedStatuses, setSelectedStatuses] = useState("statuses");
  const [selectedsources, setSelectedsources] = useState("Sources");
  const [selectedassignes, setSelectedassignes] = useState("Assignees");
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);
  const contactedDate = format(date[0].startDate, "dd/MM/yyyy").concat(
    "-",
    format(date[0].endDate, "dd/MM/yyyy")
  );
  console.log(selectedStatuses);
  console.log(selectedsources);
  console.log(selectedassignes);
  console.log(contactedDate);
  const baseApi = "http://crm.softvalley.sveducrm.com/";
  const token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const handleFilter = () => {
    console.log("clicked");
    async function getSource() {
      const result = await axios
        .post(
          `${baseApi}api/admin/lead/list`,
          {
            search: "",
            lead_status_id: [1, 2, 3],
            source_id: [1, 2, 3],
            user_id: [1, 2, 3],
            contacted_date_from: "2023-02-07T18:00:00.000Z",
            contacted_date_to: "2023-03-07T18:00:00.000Z",
          },
          config
        )
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
    getSource();
  };
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
        <ContactedDate date={date} setDate={setDate} />
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
      <LeadData />
    </div>
  );
};

export default Leads;
