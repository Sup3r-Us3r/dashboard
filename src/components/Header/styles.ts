import styled from 'styled-components';

export const Container = styled.div`
  grid-area: header;
  background: #25284C;
  padding: 0 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 30px;
    color: #565BA1;
  }

  @media (max-width: 930px) {
    h1 {
      font-size: 20px;
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      margin: 0 15px;
    }

    span {
      position: relative;

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: -5px;
        right: 8px;
        height: 10px;
        width: 10px;
        background: #00D274;
        border-radius: ${10 / 2}px;
      }
    }

    img {
      margin: 0 15px;
      height: 40px;
      width: 40px;
      border-radius: ${40 / 2}px;
    }

    p {
      font-size: 18px;
      font-weight: bold;
      color: #b2b4c7;
    }

    @media (max-width: 930px) {
      p {
        display: none;
      }
    }
  }
`;
