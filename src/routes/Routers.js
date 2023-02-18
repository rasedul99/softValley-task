import React from "react";
import { Route, Routes } from "react-router-dom";
import Customer from "../pages/Customer/Customer";
import Dashboard from "../pages/Dashborad/Dashboard";
import Expense from "../pages/Expense/Expense";
import Leads from "../pages/Leads/Leads";
import Login from "../pages/Login/Login";
import Sales from "../pages/Sales/Sales";

const Routers = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
    </Routes>
  );
};

export default Routers;
