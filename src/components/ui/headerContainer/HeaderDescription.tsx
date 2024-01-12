import React from 'react';
import {
  AnalyticsImg,
  ButtonGetAccess,
  DiagramImg,
  HeaderDescriptionContainer,
  ImagesBox,
  TextDescription,
  Title,
} from '../../styles/components/headerStyles';

export default function HeaderDescription() {
  return (
    <>
      <HeaderDescriptionContainer>
        <div>
          <Title>Стройная аналитика для маркетинга</Title>
          <TextDescription>
            Быстрая настройка для стандартных задач и данных, кастомная доработка для продвинутых и
            продуктивных
          </TextDescription>
          <ButtonGetAccess>Получить доступ</ButtonGetAccess>
        </div>
        <ImagesBox>
          <AnalyticsImg src="./img/main-screen.png" alt="пример аналитики" />
          <DiagramImg src="./img/audience.png" alt="диаграмма" />
        </ImagesBox>
      </HeaderDescriptionContainer>
    </>
  );
}
