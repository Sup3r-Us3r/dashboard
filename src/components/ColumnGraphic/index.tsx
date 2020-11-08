import React, { useState, useEffect } from 'react';

import { ChartContainer } from './styles';

const ColumnGraphic = () => {
  const [options, setOptions] = useState<object>({});
  const [series, setSeries] = useState<Array<any>>([]);

  useEffect(() => {
    setOptions({
      title: {
        text: 'Customer Growth',
        offsetY: 10,
        offsetX: 30,
        style: {
          fontSize: '20px',
          color: '#4f5386',
        },
      },
      chart: {
        id: 'dashboard',
        type: 'bar',
        fontFamily: 'Roboto',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ['#4678ff', '#00c2ff'],
      grid: {
        strokeDashArray: 3,
        borderColor: '#3c4170',
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        labels: {
          style: {
            colors: '#f6f6f8',
          },
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: '#f6f6f8',
          },
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        bar: {
          // endingShape: 'rounded',
          columnWidth: '40%',

          dataLabels: {
            hideOverflowingLabels: true,
          },
        },
      },
    });
  
    setSeries([
      {
        name: 'Man',
        data: [30, 40, 45, 50, 149, 60, 70, 91, 12, 45, 12, 97],
      },
      {
        name: 'Woman',
        data: [13, 20, 65, 40, 79, 70, 40, 11, 56, 12, 67, 90],
      }
    ]);
  }, []);

  return (
    <ChartContainer
      options={options}
      series={series}
      type="bar"
      width="100%"
      height="350"
    />
  );
}

export default ColumnGraphic;
