import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const StatusesDropdown = () => {
  const [statuses, setStatuses] = useState([]);
  const baseApi = "http://crm.softvalley.sveducrm.com/";
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    async function getStatus() {
      const result = await axios
        .get(`${baseApi}api/admin/base/lead-status`, config)
        .then((res) => setStatuses(res.data.data))
        .catch((err) => console.log(err));
    }
    getStatus();
  }, []);
  const [selectedStatuses, setSelectedStatuses] = useState("statuses");

  const handleChange = (event) => {
    setSelectedStatuses(event.target.value);
  };
  return (
    <div>
      <div>
        <div className="relative inline-flex self-center">
          <div className="absolute top-0 right-0  pointer-events-none p-2">
            <IoMdArrowDropdown />
          </div>

          <select
            value={selectedStatuses}
            onChange={handleChange}
            className=" rounded border border-gray-400 text-gray-600 py-1 w-60 pl-2 pr-10 bg-white  focus:outline-none appearance-none"
          >
            {statuses.map((status, index) => (
              <option key={index} value={status.name}>
                {status.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default StatusesDropdown;
