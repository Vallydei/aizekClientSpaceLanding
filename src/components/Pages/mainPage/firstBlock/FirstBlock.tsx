import React from 'react';
import './headerStyles.css';
import { ButtonMedium } from '../../../App/commonComponents/Button/Button';

export default function FirstBlock(): JSX.Element {
  const onClick = async (sectionId: string) => {
    try {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (error) {
      console.error('Navigation failed:', error);
    }
  };

  return (
    <>
      <div className="flexBoxHeader">
        <div className="flexBoxHeaderDescription">
          <img className="mainImg" src="./img/main.svg" />
          <div className="boxHeader">
            <h1 className="headerTitle">Стройная аналитика для маркетинга</h1>
            <p className="headerText">
              Быстрая настройка для стандартных задач и данных, кастомная доработка для продвинутых
              и продуктивных
            </p>
            <ButtonMedium onClick={() => onClick('application')} className="accessBtn">
              Получить доступ
            </ButtonMedium>
          </div>
        </div>
      </div>
    </>
  );
}
