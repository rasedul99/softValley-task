import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const AssignessDropdown = ({ selectedassignes, setSelectedassignes }) => {
  const [assignes, setAssignes] = useState([]);
  const baseApi = "http://crm.softvalley.sveducrm.com/";
  useEffect(() => {
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    async function getAssigne() {
      const result = await axios
        .get(`${baseApi}api/admin/base/assignee`, config)
        .then((res) => setAssignes(res.data.data))
        .catch((err) => console.log(err));
    }
    getAssigne();
  }, []);
  const handleChange = (event) => {
    setSelectedassignes(event.target.value);
  };
  return (
    <div>
      <div>
        <div className="relative inline-flex self-center">
          <div className="absolute top-0 right-0  pointer-events-none p-2">
            <IoMdArrowDropdown />
          </div>

          <select
            value={selectedassignes}
            onChange={handleChange}
            className=" rounded border border-gray-400 text-gray-600 py-1 w-60 pl-2 pr-10 bg-white  focus:outline-none appearance-none"
          >
            <option disabled={true} value="">
              Assignees
            </option>
            {assignes.map((assigne, index) => (
              <option key={index} value={assigne.user_id}>
                {assigne.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default AssignessDropdown;
