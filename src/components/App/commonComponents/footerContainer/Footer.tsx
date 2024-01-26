import React from 'react';
import { StyledLink } from '../Link/Link';
import Button from '../Button/Button';
import SwiperComponent from './SwiperComponent';
import './footerStyles.css';

const footerProps = {
  title: 'Простые цены',
  text: 'Почти все наши клиенты выбирают опцию “Оптимум”, т.к. почти всем нужны специфические данные и графики. Опция “Оптимум” позволяет сохранить гибкость и экономичность, постепенно расширяя функционал.',
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
    <footer className="footerContainer" id="prices">
      <div className="flexBoxFooter">
        <h2 className="footerTitle">{footerProps.title}</h2>
        <p className="footerText">{footerProps.text}</p>
        <SwiperComponent />
        <div className="footerAddress" id="contacts">
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
      </div>
    </footer>
  );
}
