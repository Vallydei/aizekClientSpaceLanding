import React from 'react';
import Button from '../../App/commonComponents/Button/Button';
import { Title } from '../../App/commonComponents/Title/Title';
import './headerStyles.css';

export default function First(): JSX.Element {
  return (
    <>
      <div className="flexBoxHeader">
        <div className="flexBoxHeaderDescription">
          <img className="mainImg" src="./img/main.svg" />
          <div className="boxHeader">
            <Title mainColor bigger>
              Стройная аналитика для маркетинга
            </Title>
            <p className="headerText">
              Быстрая настройка для стандартных задач и данных, кастомная доработка для продвинутых
              и продуктивных
            </p>
            <Button medium className="accessBtn">
              Получить доступ
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
