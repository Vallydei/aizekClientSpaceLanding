import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 1125px;
  background-color: #172755;
  border-top: solid 17px #ef2a82;
  color: #fff;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 272px 210px 72px;
`;

export const FooterCarousel = styled.div`
  width: 100%;
  height: 440px;
  background-color: #2a407c;
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

export const FooterAddress = styled.address`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: #8794BA;
  font-size: 14px;
  font-style: normal;
  `;

export const FooterList= styled.ul`
list-style-type: none;
display: flex;
gap: 36px;
`
