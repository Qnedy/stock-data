import { useEffect } from "react";

import { useDashboard } from "./hooks";

const Dashboard = () => {
  const { timeSeriesIntraDay } = useDashboard();

  useEffect(() => {
    console.log(timeSeriesIntraDay)
  }, [timeSeriesIntraDay])

  return (<div>
    teste
  </div>)
}

export default Dashboard;