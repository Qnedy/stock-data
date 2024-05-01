import ReactApexChart from "react-apexcharts";
import { format } from 'date-fns';

const TimeSeriesChart = ({ series, title, height, width }: any) => {

  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: title,
      align: "left" as const,
    },
    
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category" as const,
      labels: {
        formatter: function(val: string) {
          if(val) {
            const dateString = format(val, "HH:mm");
            return dateString;
          }

          return ""
        }
      }
    },
  }

  return (<div className="text-black">
    <ReactApexChart 
      options={options} 
      series={series} 
      type="candlestick" 
      height={height} 
      width={width}
    />
  </div>)
}

export default TimeSeriesChart;