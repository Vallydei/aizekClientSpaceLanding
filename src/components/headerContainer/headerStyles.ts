import styled from 'styled-components';
import { FlexBoxColumn, FlexBoxRow } from '../FlexBox/FlexBox';

export const FlexBoxHeader = styled(FlexBoxColumn)`
  position: relative;
  height: 815px;
  overflow: hidden;
`;

export const BoxHeaderBackground = styled.div`
  width: 100%;
  height: 98%;
  background-color: #172755;
  clip-path: polygon(0% 0%, 100% 0%, 100% 68%, 0% 100%);
  position: absolute;
  z-index: -1;
  &::before {
    content: '';
    position: absolute;
    background-image: url('./img/tech_icon_cs-grow.png');
    background-repeat: no-repeat;
    background-size: 580px 580px;
    top: 0;
    left: 0;
    width: 660px;
    height: 660px;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    background-image: url('./img/Subtract.png');
    background-repeat: no-repeat;
    background-size: 1100px 800px;
    top: 0;
    right: -100px;
    width: 1200px;
    height: 1200px;
    z-index: -1;
  }
`;

export const BoxHeaderBackground2 = styled.div`
  width: 100%;
  height: 815px;
  overflow: hidden;
  background-color: #ef2a82;
  clip-path: polygon(0 0, 100% 0, 100% 68.6%, 0 100%);
  position: absolute;
  z-index: -2;
`;

export const FlexBoxNav = styled(FlexBoxRow)`
  margin: 61px auto 30px;
  max-width: 1180px;
  width: 100%;
`;

export const FlexBoxHeaderDescription = styled(FlexBoxRow)`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
`;

export const BoxHeader = styled(FlexBoxColumn)`
  min-width: 50%;
  height: 100%;
  padding-top: 7%;
  padding-right: 150px;
  gap: 30px;
  justify-content: start;
  align-items: start;
`;

export const AnalyticsImg = styled.img`
  border-radius: 38px;
  margin-right: -300px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const DiagramImg = styled.img`
  position: absolute;
  right: 30%;
  border-radius: 38px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;
