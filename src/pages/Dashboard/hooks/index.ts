import { useFetchTimeSeriesIntraDay } from "../dashboard.query";

export const useDashboard = () => {
  const { data: timeSeriesIntraDay } = useFetchTimeSeriesIntraDay();

  return {
    timeSeriesIntraDay
  }
}