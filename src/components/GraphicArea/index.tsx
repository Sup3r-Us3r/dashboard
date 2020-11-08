import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const GraphicArea = () => {
  const [options, setOptions] = useState<object>({});
  const [series, setSeries] = useState<Array<any>>([]);

  useEffect(() => {
    setOptions({
      chart: {
        type: 'radialBar',
        fontFamily: 'Roboto',
        toolbar: {
          show: false,
        },
      },
      colors: ['#4678ff'],
      grid: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          show: false,
        },
        type: 'datetime',
        categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z', '2018-09-19T04:30:00.000Z', '2018-09-19T05:30:00.000Z', '2018-09-19T06:30:00.000Z'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      tooltip: {
        enabled: false,
        // x: {
        //   format: 'dd/MM/yy HH:mm',
        // },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
      legend: {
        show: false,
      },
      stroke: {
        curve: 'smooth',
      },
    });
  
    setSeries([
      {
        name: 'Visitors',
        data: [300, 700, 900, 480, 532, 700, 636, 409, 800, 968],
      },
    ]);
  }, []);

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      width="100%"
      height="100"
    />
  );
}

export default GraphicArea;
