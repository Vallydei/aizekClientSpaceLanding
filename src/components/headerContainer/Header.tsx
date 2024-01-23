import React from 'react';
import Button from '../Button/Button';
import { Title } from '../Title/Title';
import OptionNavbar from './navBar/OptionalNavBar';
import './styleHeader.css';

export default function Header(): JSX.Element {
  return (
    <div className="flexBoxHeader">
      <OptionNavbar />
      <div className="flexBoxHeaderDescription">
        <img className="mainImg" src="./img/main.svg" />
        <div className="boxHeader">
          <Title mainColor bigger>
            Стройная аналитика для маркетинга
          </Title>
          <p className="headerText">
            Быстрая настройка для стандартных задач и данных, кастомная доработка для продвинутых и
            продуктивных
          </p>
          <Button medium className="accessBtn">
            Получить доступ
          </Button>
        </div>
      </div>
    </div>
  );
}
