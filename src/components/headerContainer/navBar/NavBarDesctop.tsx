import React from 'react';
import Logo from '../Logo';
import Button from '../../Button/Button';
import { StyledLink } from '../../Link/Link';
import './styleNavBar.css';

const scrollToSection = (sectionId: string) => {
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
        <StyledLink
          to="/#reports"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('reports');
          }}
        >
          Отчеты
        </StyledLink>
        <StyledLink
          to="/#data"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('data');
          }}
        >
          Данные
        </StyledLink>
        <StyledLink
          to="/#help"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('help');
          }}
        >
          Помощь
        </StyledLink>
        <StyledLink
          to="/#contacts"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('contacts');
          }}
        >
          Контакты
        </StyledLink>
      </nav>
      <div className="buttonBox">
        <StyledLink to="/signin">
          Вход
        </StyledLink>
        <div className="nacContainer">
          <Button base className="btnApply">
            Заявка
          </Button>
        </div>
      </div>
      <div className="burgerBox">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="40"
          viewBox="0 0 50 50"
          fill="#8794BA"
        >
          <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
        </svg>
      </div>
    </div>
  );
}
