import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import './burgerMenuStyles.css';
import Logo from '../Logo';

const sections = [
  { id: 'reports', label: 'Отчеты' },
  { id: 'data', label: 'Данные' },
  { id: 'prices', label: 'Цены' },
  { id: 'contacts', label: 'Контакты' },
];
// type BurgerMenuProps = {
//   sections: Section[];
//   onClick: (sectionId: string) => Promise<void>;
// };

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isOpen = isMenuOpen ? 'open' : '';

  const onClick = async (sectionId: string) => {
    toggleMenu();

    try {
      if (location.pathname !== '/aizekClientSpaceLanding') {
        await navigate('/aizekClientSpaceLanding');
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
    <div className="navMobContainer">
      <div className="logoBox">
        <Link to="/aizekClientSpaceLanding">
          <Logo/>
        </Link>

        <div className='menuContainer'>
          <Link className="styledLink" to="/aizekClientSpaceLanding/auth">
            Вход
          </Link>
          <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
        </div>
      </div>
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
