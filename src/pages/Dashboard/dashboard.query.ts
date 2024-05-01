import { useQuery } from "@tanstack/react-query";

import { api } from "../../services/api";

const alphaVantageAPIKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

const fetchTimeSeriesIntraDay = async () => {
  const { data } = await api.get(`/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo`);

  const rawEntriesData = data?.["Time Series (5min)"];

  const entriesData = [];
  for (const dateTime in rawEntriesData) {
    const { 
      "1. open": open, 
      "2. high": high, 
      "3. low": low, 
      "4. close": close
    } = rawEntriesData[dateTime];

    const newEntry = {
      x: new Date(dateTime),
      y: [parseFloat(open), parseFloat(high), parseFloat(low), parseFloat(close)]
    }

    entriesData.push(newEntry)
  }

  const formattedData = {
    title: data?.["Meta Data"]["1. Information"],
    seriesData: entriesData
  }

  return formattedData;
}

export const useFetchTimeSeriesIntraDay = () => {
  return useQuery({
    queryKey: ["intraDay"],
    queryFn: fetchTimeSeriesIntraDay,
  });
}