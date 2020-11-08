import React from 'react';
import {
  AiOutlineArrowUp as ArrowUpIcon,
  AiOutlineArrowDown as ArrowDownIcon
} from 'react-icons/ai';

import { Container, BoxInfo } from './styles';

const Statistics = () => {
  return (
    <Container>
      <BoxInfo>
        <ArrowDownIcon color="#5080ff" size={35} />

        <div>
          <span>$5980</span>
          <p>Income in this Period</p>
        </div>
      </BoxInfo>

      <BoxInfo>
        <ArrowUpIcon color="#8a35ff" size={35} />

        <div>
          <span>$973</span>
          <p>Expense in this Period</p>
        </div>
      </BoxInfo>

      <BoxInfo>
        <ArrowDownIcon color="#b06052" size={35} />

        <div>
          <span>$2745</span>
          <p>Total Visitor in this Period</p>
        </div>
      </BoxInfo>

      <BoxInfo>
        <ArrowDownIcon color="#1898cc" size={35} />

        <div>
          <span>$35427</span>
          <p>New Customers at Period</p>
        </div>
      </BoxInfo>
    </Container>
  );
}

export default Statistics;
