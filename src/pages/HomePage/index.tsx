import React from 'react';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Statistics from '../../components/Statistics';
import Graphics from '../../components/Graphics';
import Pending from '../../components/Pending';

import { Wrapper } from './styles';

const HomePage = () => {
  return (
    <Wrapper>
      <Menu />
      <Header />
      <Statistics />
      <Graphics />
      <Pending />
    </Wrapper>
  );
}

export default HomePage;
