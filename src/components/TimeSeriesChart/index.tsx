import ReactApexChart from "react-apexcharts";
import { format, parse, parseISO } from 'date-fns';

const TimeSeriesChart = ({ series, title, height, width }: any) => {

  const options = {
    chart: {
      height: 350,
    },
    title: {
      text: title,
      align: "left" as const,
    },
    annotations: {
      xaxis: [
        {
          x: 'Oct 06 14:00',
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396'
            },
            orientation: 'horizontal',
            offsetY: 7,
            text: 'Annotation Test'
          }
        }
      ]
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
        }
      }
    },
    // yaxis: {
    //   tooltip: {
    //     enabled: true
    //   }
    // }
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