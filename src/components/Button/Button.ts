import styled from 'styled-components';

type CustomButtonProps = {
    base?: boolean;
    medium?: boolean;
  }

const Button = styled.button<CustomButtonProps>`
  width: ${props => props.base ? '160px' : props.medium ? '288px' : '475px'};
  height: ${props => props.base ? '40px' : props.medium ? '50px' : '80px'};
  font-size:  ${props => props.base ? '16px' : props.medium ? '16px' :'32px'};
  background-color: #ef2a82;
  color: #fff;
  border-radius: 68px;
  border: none;
  z-index: 1;
  &:hover {
    cursor: pointer;
    background-color: #d22670; 
  }

`;

export default Button;