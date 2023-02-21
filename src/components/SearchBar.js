import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({search,setSearch}) => {

  return (
    <div className="flex justify-between items-center max-w-xs rounded   p-1  border border-slate-200">
      <input
        placeholder="Search in leads table...."
        className="outline-none bg-slate-100"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <span>
        <CiSearch size="20" />
      </span>
    </div>
  );
};

export default SearchBar;
