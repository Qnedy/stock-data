import { Routes, Route } from "react-router-dom";

import Dashboard from ".";

export const DashboardRoutes = () => {

  return (
    <Routes>
      <Route index element={<Dashboard />} />
    </Routes>
  )
}