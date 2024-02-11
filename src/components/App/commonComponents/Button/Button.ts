import styled from '@emotion/styled';

export const Button = styled('button')`
  width: 160px;
  height: 40px;
  font-size: 16px;
  background-color: #ef2a82;
  color: #fff;
  border-radius: 68px;
  border: none;
  &:hover {
    background-color: #f17bb0;
  }

  &:active {
    background-color: #e83186;
  }

  @media (max-width: 960px) {
    width: 170px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px;
  }
`;

export const ButtonMedium = styled(Button)`
  width: 288px;
  height: 50px;
 `;

export const ButtonLarge = styled(Button)`
  width: 475px;
  height: 80px;
  font-size: 32px;
`;

