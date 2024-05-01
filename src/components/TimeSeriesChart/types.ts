type Series = {
  name: string;
  data: {
    x: Date;
    y: number[];
  }[]
}

export type TimeSeriesChartProps = {
  series?: Series[];
  title: string;
  height: number;
  width: number;
  lastUpdate: string;
}