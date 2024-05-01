import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PublicRoute from "./components/PublicRoute";

//Module routes
const Dashboard = React.lazy(() => import("../pages/Dashboard/routes").then((module) => ({
  default: module.DashboardRoutes
})));

export const Router = () => {

  return (
    <Suspense fallback={<div>Carregando...</div>} >
      <Routes>
        <Route element={<PublicRoute />}>
          <Route index path="*" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  )
}