import { useEffect } from "react";

import TimeSeriesChart from "../../components/TimeSeriesChart";
import { useDashboard } from "./hooks";

const Dashboard = () => {
  const { timeSeriesIntraDay } = useDashboard();

  useEffect(() => {
    console.log(timeSeriesIntraDay)
  }, [timeSeriesIntraDay])

  const series = [{
    name: 'candle',
    data: timeSeriesIntraDay?.seriesData
  }];

  return (<div className="flex items-center justify-center">

    {/* {timeSeriesIntraDay?.} */}
    {timeSeriesIntraDay ? <TimeSeriesChart 
      series={series}
      height={500}
      width={800}
      title={timeSeriesIntraDay.title}
    /> : null}
  </div>)
}

export default Dashboard;