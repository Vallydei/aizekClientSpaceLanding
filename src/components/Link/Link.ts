import styled from 'styled-components';
import { Link } from 'react-router-dom';

type StyledLinkProps = {
    small?: boolean;
  } 
export const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: #8794ba;
  padding: 10px 15px;
  font-size: ${props => props.small ? '14px' : '16px'};
  &:hover {
    cursor: pointer;
    background: #ef2a82;
    border-radius: 68px;
    color: #ffffff;
   }
`;