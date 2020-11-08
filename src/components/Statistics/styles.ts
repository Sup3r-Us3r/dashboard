import styled from 'styled-components';

export const Container = styled.div`
  grid-area: statistics;
  background: #25284C;
  padding: 15px 50px;

  display: flex;
  flex-wrap: wrap;
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 85px;
  width: 270px;
  background: #2d315d;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: 1165px) {
    margin: 10px;
    width: 100%;
  }

  &:not(:last-child) {
    margin-right: 20px;

    @media (max-width: 1165px) {
      margin: 10px;
    }
  }

  svg {
    margin-left: 15px;
  }

  div {
    margin-left: 15px;

    span {
      font-size: 22px;
      font-weight: bold;
      color: #cdcede;
      line-height: 40px;
    }

    p {
      font-size: 13px;
      font-weight: bold;
      color: #61658a;
    }
  }
`;
