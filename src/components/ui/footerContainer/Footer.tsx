import React from 'react';
import { FooterAddress, FooterButton, FooterCarousel, FooterContainer, FooterList, FooterText, FooterTitle } from '../../styles/components/footerStyles';

export default function Footer() {
  return (
    <FooterContainer>
      <FooterTitle>Простое ценообразование</FooterTitle>
      <FooterText>
        Почти все наши клиенты выбирают опцию “Оптимум”, т.к. почти всем нужны специфические данные
        и графики. <br/>
        Опция “Оптимум” позволяет сохранить гибкость и экономичность, постепенно расширяя
        функционал.
      </FooterText>

      <FooterCarousel>Carousel</FooterCarousel>
      <FooterAddress>
        <div>logo</div>
        <nav>
          <FooterList>
            <li>О продукте</li>
            <li>О компании</li>
            <li>Примеры</li>
            <li>Коннекторы</li>
          </FooterList>
        </nav>
        <FooterButton type='button'>Написать нам</FooterButton>
      </FooterAddress>
    </FooterContainer>
  );
}
