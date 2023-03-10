import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import DateModal from "./DateModal";

const ContactedDate = ({ date, setDate, contactedDate }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className=" flex rounded border border-gray-400 w-60 pl-2 pr-10 py-1">
        <input
          placeholder="Contacted Date"
          className=" text-gray-600 bg-white focus:outline-none appearance-none"
          value={contactedDate}
        />
        <button onClick={() => setShowModal(!showModal)}>
          <FaRegCalendarAlt />
        </button>
      </div>
      {showModal ? (
        <div className="absolute right-0">
          <DateModal date={date} setDate={setDate} />
        </div>
      ) : null}
    </div>
  );
};

export default ContactedDate;
