import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import './burgerMenuStyles.css';
import Logo from '../Logo';

const sections = [
  { id: 'reports', label: 'Отчеты' },
  { id: 'data', label: 'Данные' },
  { id: 'prices', label: 'Цены' },
];

export default function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (location.pathname !== '/aizekClientSpaceLanding/') {
      const navBar = document.querySelector('.navMobContainer');
      navBar?.classList.add('navbarBorder');
    }
  });

  const isOpen = isMenuOpen ? 'open' : '';

  const logoOnClick = async () => {
    try {
      if (location.pathname !== '/aizekClientSpaceLanding/') {
        await navigate('/aizekClientSpaceLanding/');
        const navBar = document.querySelector('.navMobContainer');
        navBar?.classList.remove('navbarBorder');
      }
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };
  const onClick = async (sectionId: string) => {
    toggleMenu();

    try {
      if (location.pathname !== '/aizekClientSpaceLanding/') {
        await navigate('/aizekClientSpaceLanding/');
        const navBar = document.querySelector('.navMobContainer');
        navBar?.classList.remove('navbarBorder');
      }
      const section = document.getElementById(sectionId);
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
    <div className="navMobContainer">
      <div className="logoBox">
        <div onClick={() => logoOnClick()}>
          <Logo />
        </div>
      </div>

      <div className="menuContainer">
        <Link className="styledLink" to="/aizekClientSpaceLanding/auth">
          Вход
        </Link>
        <button className={`burger ${isOpen}`} onClick={toggleMenu}></button>
      </div>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              {(section.label !== 'Данные' || window.innerWidth >= 480) && (
                <a
                  className={isMenuOpen ? 'appear' : ''}
                  style={{ animationDelay: `0.${index + 1}s` }}
                  onClick={() => onClick(section.id)}
                >
                  {section.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
      <main className={`page ${isOpen}`}>
        <Outlet />
      </main>
    </div>
  );
}
