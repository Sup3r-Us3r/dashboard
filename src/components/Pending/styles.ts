import styled from 'styled-components';

export const Container = styled.div`
  grid-area: pending;

  background: #25284C;
  padding: 0 50px;
  overflow-x: auto;

  h4 {
    font-weight: bold;
    color: #525789;
    margin-bottom: 15px;
  }

  @media (max-width: 1170px) {
    display: none;
  }
`;

export const PendingBox = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: space-around;
  align-items: center;

  background: #2d315d;
  margin-bottom: 50px;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const PendingLabel = styled.div`
  p:nth-child(1) {
    font-size: 15px;
    color: #fafafb;
    font-weight: bold;
    line-height: 35px;
  }

  p:nth-child(2) {
    color: #979aba;
    font-size: 13px;
  }
`;

export const PendingAction = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;

  button {
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    
    background: #2d315d;
    padding: 10px;
    margin: 0 30px;
    border: 2px solid #4678ff;
    border-radius: 10px;
    transition: .5s background;

    &:hover {
      cursor: pointer;
      background: #4678ff;

      svg {
        fill: #cdcede;
      }
    }

    span {
      margin-left: 5px;
      font-size: 12px;
      color: #cdcede;
    }
  }
`;

export const PendingIconBox = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;

  margin: 0 30px;

  span {
    font-size: 12px;
    font-weight: bold;
    color: #6a6f93;
  }
`;

export const PendingProgressBox = styled.div`
  display: flex;
  white-space: nowrap;
  justify-content: center;
  align-items: center;

  div {
    width: 200px;
    border-radius: 10px;
    background: #7279b2;
    margin-right: 20px;
    
    span {
      display: block;
      height: 4px;
      width: 85%;
      margin-left: 1px;
      border-radius: 10px;
      background: #00c2ff;
    }
  }

  span {
    font-size: 15px;
    font-weight: bold;
    color: #f6f6f8;
  }
`;

export const Avatars = styled.div`
  img {
    height: 40px;
    width: 40px;
    border-radius: ${40 / 2}px;
    margin: 0 5px;
  }
`;
