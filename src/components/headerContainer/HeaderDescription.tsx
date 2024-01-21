import React from 'react';
import Button from '../Button/Button';
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';
import NavBar from './NavBar';
import './styleHeader.css';

export default function Header() {
  return (
    <div className="flexBoxHeader">
      <div className="boxHeaderBackground" />
      <div className="boxHeaderBackground2" />
      <NavBar />
      <div className='flexBoxHeaderDescription'>
        <img className='mainImg' src="./img/main.svg"/>
        <div className='boxHeader'>
          <Title mainColor bigger>
            Стройная аналитика для маркетинга
          </Title>
          <Text>
            Быстрая настройка для стандартных задач и данных, кастомная доработка для продвинутых и
            продуктивных
          </Text>
          <Button medium>Получить доступ</Button>
        </div>
      </div>
    </div>
  );
}
