import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
                      "menu header"
                      "menu statistics"
                      "menu graphics"
                      "menu pending";
  grid-template-columns: 60px 1fr;
  grid-template-rows: .7fr .9fr 3fr 1fr;

  min-height: 100vh;
  max-width: 100vw;
  background: #202758;

  @media (max-width: 930px) {
    grid-template-areas:
                      "header"
                      "statistics"
                      "graphics"
                      "pending";
    grid-template-columns: 1fr;
    grid-template-rows: .3fr .9fr auto auto;
  }
`;
