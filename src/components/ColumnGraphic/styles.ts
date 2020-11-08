import styled from 'styled-components';
import Chart from 'react-apexcharts';

export const ChartContainer = styled(Chart)`
  grid-area: graphicColumn;

  background: #2d315d;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;