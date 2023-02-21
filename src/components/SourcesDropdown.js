import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SourcesDropdown = ({ selectedsources, setSelectedsources }) => {
  const [sources, setsources] = useState([]);
  const baseApi = "http://crm.softvalley.sveducrm.com/";
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    async function getSource() {
      const result = await axios
        .get(`${baseApi}api/admin/base/source`, config)
        .then((res) => setsources(res.data.data))
        .catch((err) => console.log(err));
    }
    getSource();
  }, []);

  const handleChange = (event) => {
    setSelectedsources(event.target.value);
  };
  return (
    <div>
      <div>
        <div className="relative inline-flex self-center">
          <div className="absolute top-0 right-0  pointer-events-none p-2">
            <IoMdArrowDropdown />
          </div>

          <select
            value={selectedsources}
            onChange={handleChange}
            className=" rounded border border-gray-400 text-gray-600 py-1 w-60 pl-2 pr-10 bg-white  focus:outline-none appearance-none"
          >
            <option disabled={true} value="">
              Sources
            </option>
            {sources.map((source, index) => (
              <option key={index} value={source.id}>
                {source.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SourcesDropdown;
