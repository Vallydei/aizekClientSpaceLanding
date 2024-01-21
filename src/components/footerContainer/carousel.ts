import styled from 'styled-components';
import { FlexBoxColumn } from '../FlexBox/FlexBox';

export const FooterCarousel = styled.div`
  width: 100%;
  height: 440px;
  display: flex;
  justify-content: space-between;
  gap: 4.24%;
  position: relative;
  margin-bottom: 190px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -131px;
    width: 100%;
    height: 1px;
    background-color: #8794ba;
    z-index: 0;
  }
`;

export const CarouselComponent = styled(FlexBoxColumn)`
  position: relative;
  width: 33.3%;
  height: 440px;
  justify-content: space-evenly;
  background-color: #0f1f4b;
  color: #ffffff;
  border-radius: 38px;
  font-size: 30px;
  font-weight: 800;

  &:hover {
    background-color: #ffffff;
    color: #0f1f4b;
  }
`;

export const ButtonPrices = styled.button`
  width: 206px;
  height: 50px;
  background-color: #0f1f4b;
  color: #fff;
  border-radius: 68px;
  border: none;
  font-size: 16px;
  border: 1px solid #2a407c;
  transition: background-color 0.3s;

  ${CarouselComponent}:hover & {
    cursor: pointer;
    background-color: #ef2a82;
    border: none;
  }
`;
