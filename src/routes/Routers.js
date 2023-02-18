import React from "react";

const Routers = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/leads" element={<Leads />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/expense" element={<Expense />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routers;
