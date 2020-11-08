import styled from 'styled-components';

export const Container = styled.div`
  grid-area: graphics;

  background: #25284C;
  padding: 0 50px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-areas:
                        "graphicColumn boxPercentInfo"
                        "graphicColumn graphicArea";
  grid-template-columns: calc(80vw - 200px) 20vw;
  grid-template-rows: .3fr .8fr;
  grid-gap: 20px;

  margin: 20px 0 50px 0;

  @media (max-width: 1180px) {
    grid-template-areas:
                        "graphicColumn graphicColumn"
                        "boxPercentInfo graphicArea";
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
  }
`;

export const BoxPercentInfo = styled.div`
  grid-area: boxPercentInfo;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  background: #2d315d;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media (max-width: 1180px) {
    justify-content: center;
  }

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 1180px) {
      padding: 5px;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;

      background: #30396d;
      height: 50px;
      width: 50px;
      border-radius: ${50 / 2}px;
    }

    div {
      display: block;
      margin-left: 20px;

      span {
        font-size: 20px;
        font-weight: bold;
        color: #cdcede;
        line-height: 35px;
      }

      p {
        font-size: 13px;
        color: #60659b;
      }
    }
  }
`;

export const GraphicAreaBox = styled.div`
  grid-area: graphicArea;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  background: #2d315d;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  strong {
    align-self: center;

    font-size: 15px;
    color: #cdcede;
    font-weight: bold;
    line-height: 35px;
  }

  > span {
    font-size: 25px;
    color: #cdcede;
    font-weight: bold;
    line-height: 35px;
  }

  > p {
    font-size: 13px;
    color: #4c5183;
  }
`;