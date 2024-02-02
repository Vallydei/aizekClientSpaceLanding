import React, { useEffect } from 'react';
import Logo from '../Logo';
import Button from '../../Button/Button';
import './navBarStyles.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sections = [
  { id: 'reports', label: 'Отчеты' },
  { id: 'data', label: 'Данные' },
  { id: 'prices', label: 'Цены' },
  { id: 'application', label: 'Контакты' },
];

export default function NavBarDesctop(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname !== '/aizekClientSpaceLanding/') {
      const navBar = document.querySelector('.flexBoxNav');
      navBar?.classList.add('navbarBorder');
    }
  });

  const onClick = async (sectionId: string) => {
    try {
      if (location.pathname !== '/aizekClientSpaceLanding/') {
        await navigate('/aizekClientSpaceLanding/');
        const navBar = document.querySelector('.flexBoxNav');
        navBar?.classList.remove('navbarBorder');
      }

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };
  return (
    <div className="flexBoxNav">
      <div className="navContainer">
        <nav className="navList" id="nav">
          <div onClick={() => onClick('./aizekClientSpaceLanding/')}>
            <Logo />
          </div>

          {sections.map((section) => (
            <a className="navLink" key={section.id} onClick={() => onClick(section.id)}>
              {section.label}
            </a>
          ))}
        </nav>
        <div className="buttonBox">
          <Link
            className="navLink"
            // to="/aizekClientSpaceLanding/auth"
            to="https://clientspace.aizek.io"
          >
            Вход
          </Link>
          <div className="nacContainer">
            <Button onClick={() => onClick('application')} base className="btnApply">
              Заявка
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
