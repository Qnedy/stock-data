import { useQuery } from "@tanstack/react-query";

import { api } from "../../services/api";

const alphaVantageAPIKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

const fetchTimeSeriesIntraDay = async () => {
  const { data } = await api.get(`/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`);

  return data;
}

export const useFetchTimeSeriesIntraDay = () => {
  return useQuery({
    queryKey: ["intraDay"],
    queryFn: fetchTimeSeriesIntraDay,
  });
}