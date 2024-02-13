import React from 'react';
import { Button } from '../Button/Button';
import './footerStyles.css';
import { Link, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const onClick = async () => {
    try {
      if (location.pathname !== '/aizekClientSpaceLanding/') {
        await navigate('/aizekClientSpaceLanding/');
        const navBar = document.querySelector('.flexBoxNav');
        navBar?.classList.remove('navbarBorder');
      }

      const section = document.getElementById('firstBlock');
      if (section) {
        const rect = section.getBoundingClientRect();
        window.scrollTo({
          top: rect.top + window.scrollY - 110,
          behavior: 'smooth',
        });
      }
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return (
    <footer className="footer" id="contacts">
      <div className="footerNav">
        <div style={{ cursor: 'pointer' }} onClick={() => onClick()}>
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
        <Button className="contactBtn" type="button">
          Написать нам
        </Button>
      </div>
    </footer>
  );
}
