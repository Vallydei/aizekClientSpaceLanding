import React from 'react';
import Logo from '../Logo';
import Button from '../../Button/Button';
import './navBarStyles.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const sections = [
  { id: 'reports', label: 'Отчеты' },
  { id: 'data', label: 'Данные' },
  { id: 'prices', label: 'Цены' },
  { id: 'contacts', label: 'Контакты' },
];

export default function NavBarDesctop(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const onClick = async (sectionId: string) => {
    try {
      if (location.pathname !== '/') {
        await navigate('/');
      }

      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        console.log('!');
      }
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };
  return (
    <div className="flexBoxNav">
      <div className="navContainer">
        <nav className="navList" id="nav">
          <Link to="/">
            <Logo />
          </Link>

          {sections.map((section) => (
            <a className="navLink" key={section.id} onClick={() => onClick(section.id)}>
              {section.label}
            </a>
          ))}
        </nav>
        <div className="buttonBox">
          <Link className="navLink" to="/auth">
            Вход
          </Link>
          <div className="nacContainer">
            <Button base className="btnApply">
              Заявка
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
