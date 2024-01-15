import styled from 'styled-components';

export const FormForDemostration = styled.div`
  max-width: 990px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  gap: 25px;
  position: relative;
  &::after {
    content: '';
    background-image: url('./img/Subtract (1).png');
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    max-width: 1000px;
    height: 100%;
    max-height: 110%;
    z-index: -1;
  }
`;



