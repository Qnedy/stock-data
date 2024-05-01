import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

import { api } from "../../services/api";

const alphaVantageAPIKey = import.meta.env.VITE_ALPHA_VANTAGE_API_KEY;

const fetchTimeSeriesIntraDay = async () => {
  const { data } = await api.get(`/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${alphaVantageAPIKey}`);

  const rawEntriesData = data?.["Time Series (5min)"];
  const rawEntriesMetaData = data?.["Meta Data"];
  
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
    title: rawEntriesMetaData["1. Information"],
    seriesData: entriesData.reverse(),
    lastUpdate: format(rawEntriesMetaData["3. Last Refreshed"], "MMMM dd, yyyy - HH:mm:ss")
  }

  return formattedData;
}

export const useFetchTimeSeriesIntraDay = () => {
  return useQuery({
    queryKey: ["intraDay"],
    queryFn: fetchTimeSeriesIntraDay,
  });
}