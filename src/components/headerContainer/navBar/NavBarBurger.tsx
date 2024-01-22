import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './burgerMenuStyles.css';
import Logo from '../Logo';

const sections = [
  { id: 'reports', label: 'Отчеты' },
  { id: 'data', label: 'Данные' },
  { id: 'help', label: 'Помощь' },
  { id: 'contacts', label: 'Контакты' },
];

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? 'open' : '';

  const onClick = (sectionId: string) => {
    toggleMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="navBurger">
      <div className="logoBox">
        <Logo />
        <Link className='styledLink' to="/signin">Вход</Link>
      </div>

      <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {sections.map((section, index) => (
            <a
              key={section.id}
              className={isMenuOpen ? 'appear' : ''}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={() => onClick(section.id)}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
      <main className={`page ${isOpen}`}>
        <Outlet />
      </main>
    </div>
  );
}
