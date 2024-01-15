import styled from 'styled-components';

type CustomTextProps = {
  bigger?: boolean;
  }

export const Text = styled.p<CustomTextProps>`
  color: #8794ba;
  font-size: ${props => props.bigger ? '18px' : '16px'};
`;

export const FormText = styled.p<CustomTextProps>`
  font-size:  24px;
  font-weight: lighter;
`;
