import styled from 'styled-components';

export const Container = styled.div`
  grid-area: menu;
  background: #202758;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 930px) {
    display: none;
  }

  svg {
    margin: 20px;

    &:hover {
      transition: .7s fill ease;
      fill: #CDCEDE;
      cursor: pointer;
  }
  }
`;
