import React from 'react';
import Logo from '../Logo';
import Button from '../../Button/Button';
import './styleNavBar.css';
import { Link } from 'react-router-dom';

const sections = [
  { id: 'reports', label: 'Отчеты' },
  { id: 'data', label: 'Данные' },
  { id: 'help', label: 'Помощь' },
  { id: 'contacts', label: 'Контакты' },
];

const onClick = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function NavBarDesctop() {
  return (
    <div className="flexBoxNav">
      <nav className="navContainer" id="nav">
        <Logo />
        {sections.map((section) => (
          <a className='navLink' key={section.id} onClick={() => onClick(section.id)}>
            {section.label}
          </a>
        ))}
      </nav>
      <div className="buttonBox">
        <Link className='navLink' to="/signin">Вход</Link>
        <div className="nacContainer">
          <Button base className="btnApply">
            Заявка
          </Button>
        </div>
      </div>
    </div>
  );
}
