import styled from 'styled-components';
import { FlexBoxColumn } from '../FlexBox/FlexBox';

export const FooterContainer = styled.footer`
  position: relative;
  height: 1050px;
`;

export const BoxFooterBackground = styled.div`
  width: 100%;
  height: 120%;
  background-color: #172755;
  clip-path: polygon(100% 1.3%, 100% 100%, 0 100%, 0 22%);
  position: absolute;
  z-index: -1;
`;

export const BoxFooterBackground2 = styled.div`
  width: 100%;
  height: 1035px;
  background-color: #ef2a82;
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 25%);
  position: absolute;
  z-index: -2;
`;

export const FlexBoxFooter = styled(FlexBoxColumn)`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto 0;
  padding-top: 350px;
  gap: 30px;
  text-align: center;
`;

export const FooterAddress = styled.address`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: #8794ba;
  font-size: 14px;
  font-style: normal;
`;

export const FooterList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 36px;
`;
