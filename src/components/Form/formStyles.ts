import styled from 'styled-components';

export const FormStyled = styled.form`
  max-width: 990px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
  margin: 73px auto 0;

  position: relative;
  &::after {
    content: '';
    background-image: url('./img/Subtract (1).png');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 1000px;
    height: 150%;
    z-index: -1;
  }
`;
