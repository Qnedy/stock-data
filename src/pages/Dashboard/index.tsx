import TimeSeriesChart from "../../components/TimeSeriesChart";
import { useDashboard } from "./hooks";

const Dashboard = () => {
  const { timeSeriesIntraDay } = useDashboard();

  const series = [{
    name: 'candle',
    data: timeSeriesIntraDay?.seriesData
  }];

  return (<div className="flex items-center justify-center">
    {timeSeriesIntraDay ? <TimeSeriesChart 
      series={series}
      height={500}
      width={850}
      title={timeSeriesIntraDay.title}
      lastUpdate={timeSeriesIntraDay.lastUpdate}
    /> : null}
  </div>)
}

export default Dashboard;