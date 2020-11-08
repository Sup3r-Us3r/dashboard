import React from 'react';
import { FiTarget as TargetIcon } from 'react-icons/fi';
import { BiBriefcase as CaseIcon } from 'react-icons/bi';

import ColumnGraphic from '../ColumnGraphic';
import GraphicArea from '../GraphicArea';

import { Container, Grid, BoxPercentInfo, GraphicAreaBox } from './styles';

const Graphics = () => {
  return (
    <Container>
      <Grid>
        <ColumnGraphic />

        <BoxPercentInfo>
          <div>
            <i>
              <TargetIcon color="#4678ff" size={25} />
            </i>

            <div>
              <span>75%</span>
              <p>New Customer this year</p>
            </div>
          </div>

          <div>
            <i>
              <CaseIcon color="#eb714a" size={25} />
            </i>

            <div>
              <span>25%</span>
              <p>New Deals this year</p>
            </div>
          </div>
        </BoxPercentInfo>

        <GraphicAreaBox>
          <strong>4.5%</strong>
          <GraphicArea />
          <span>91694</span>
          <p>New Visitors this year</p>
        </GraphicAreaBox>
      </Grid>
    </Container>
  );
}

export default Graphics;
