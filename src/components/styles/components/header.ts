import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height: 815px;
  background: #172755;
  padding: 50px 210px 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 0% 100%);
  overflow: hidden;
  position: relative;


  &::before{
    content: '';
    position: absolute;
    background-image: url('./img/tech_icon_cs-grow.png');
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    width: 660px;
    height: 660px;
    z-index: -1;
  }
  &::after{
    content: '';
    position: absolute;
    background-image: url('./img/Subtract.png');
    background-repeat: no-repeat;
    top: 0;
    right: -360px;
    max-width: 1438px;
    width: 100%;
    height: 100%;
    max-height: 1438px;
    z-index: -1;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 20px;
`;

export const NavContainer = styled.nav`
  width: 100%;
  margin-left: 43.5px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 26px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #8794ba;
  padding: 10px;
  &:hover {
    cursor: pointer;
    background:  #ef2a82;
    border-radius: 68px;
    color: #fff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const LinkEntry = styled.a`
  color: #fff;
  margin-left: 40px;
  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  width: 160px;
  height: 40px;
  background: #ef2a82;
  border-radius: 68px;
  border: none;
  color: #fff;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;
