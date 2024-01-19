import styled from 'styled-components';


type ItemProps = {
  isSecond?: boolean;
};

export const FooterCarousel = styled.div`
  width: 100%;
  height: 440px;

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

export const CaroselComponent = styled.div<ItemProps>`
  width: 340px;
  height: 440px;
  background-color: ${(props) => (props.isSecond ? '#ffffff' : '#0F1F4B')};
  color: ${(props) => (props.isSecond ? '#172755' : '#ffffff')};
  border-radius: 38px;
  font-size: 30px;
  font-weight: 800px;
`;

export const CaroselTitle = styled.h3``;
