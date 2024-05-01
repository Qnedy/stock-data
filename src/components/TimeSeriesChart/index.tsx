import ReactApexChart from "react-apexcharts";

const TimeSeriesChart = ({ options, series }: any) => {
  return (<div>
    <ReactApexChart options={options} series={series} type="candlestick" height={350} width={800} />
  </div>)
}

export default TimeSeriesChart;