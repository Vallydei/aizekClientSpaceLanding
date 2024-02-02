import React from 'react';
import Button from '../Button/Button';
import './footerStyles.css';
import { Link } from 'react-router-dom';

const footerProps = {
  logoImg: './svg/footerLogo.svg',
};
const footerNav = [
  // { id: 1, label: 'О продукте', link: '/' },
  { id: 2, label: 'О компании', link: 'https://advgroup.ru/' },
  // { id: 3, label: 'Примеры', link: '/' },
  // { id: 4, label: 'Коннекторы', link: '/' },
];
export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="footerNav">
        <div>
          <img className="footerLogo" src={footerProps.logoImg} alt="logo" />
        </div>
        <nav>
          <ul className="footerList">
            {footerNav.map((link) => (
              <li key={link.id}>
                <Link className="footerLink" to={link.link}>
                  {link.label}
                </Link>
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
