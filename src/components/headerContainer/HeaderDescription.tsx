import React from 'react';
import {
  AnalyticsImg,
  BoxHeader,
  DiagramImg,
  FlexBoxHeader,
  FlexBoxHeaderBackground,
  FlexBoxHeaderBackground2,
  FlexBoxHeaderDescription,
} from './headerStyles';
import Button from '../Button/Button';
import { Text } from '../Text/Text';
import { Title } from '../Title/Title';
import NavBar from './NavBar';

export default function Header() {
  return (
    <FlexBoxHeader jcStart>
      <FlexBoxHeaderBackground2 />
      <FlexBoxHeaderBackground />
      <NavBar />
      <FlexBoxHeaderDescription>
        <BoxHeader>
          <Title mainColor bigger>
            Стройная аналитика для маркетинга
          </Title>
          <Text>
            Быстрая настройка для стандартных задач и данных, кастомная доработка для продвинутых и
            продуктивных
          </Text>
          <Button medium>Получить доступ</Button>
        </BoxHeader>

        <AnalyticsImg src="./img/main-screen.png" alt="пример аналитики" />
        <DiagramImg src="./img/audience.png" alt="диаграмма" />
      </FlexBoxHeaderDescription>
    </FlexBoxHeader>
  );
}
