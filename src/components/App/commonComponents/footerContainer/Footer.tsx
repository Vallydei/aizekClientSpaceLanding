import React from 'react';
import { StyledLink } from '../Link/Link';
import Button from '../Button/Button';
import './footerStyles.css';

const footerProps = {
  logoImg: './svg/footerLogo.svg#footerLogo',
};
const footerNav = [
  { id: 1, label: 'О продукте', link: '/' },
  { id: 2, label: 'О компании', link: '/' },
  { id: 3, label: 'Примеры', link: '/' },
  { id: 4, label: 'Коннекторы', link: '/' },
];
export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footerNav">
        <div>
          <img src={footerProps.logoImg} alt="" />
        </div>
        <nav>
          <ul className="footerList">
            {footerNav.map((link) => (
              <li key={link.id}>
                <StyledLink to={link.link} small>
                  {link.label}
                </StyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <Button className="contactBtn" base type="button">
          Написать нам
        </Button>
      </div>
    </footer>
  );
}
