import React from 'react';
import {
  BoxFooterBackground,
  BoxFooterBackground2,
  FlexBoxFooter,
  FooterAddress,
  FooterCarousel,
  FooterContainer,
  FooterList,
} from './footerStyles';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import { StyledLink } from '../Link/Link';
import Button from '../Button/Button';

export default function Footer() {
  return (
    <FooterContainer>
      <BoxFooterBackground />
      <BoxFooterBackground2 />
      <FlexBoxFooter>
        <Title mainColor>Простое ценообразование</Title>
        <Text bigger>
          Почти все наши клиенты выбирают опцию “Оптимум”, т.к. почти всем нужны специфические
          данные и графики. <br />
          Опция “Оптимум” позволяет сохранить гибкость и экономичность, постепенно расширяя
          функционал.
        </Text>

        <FooterCarousel>Carousel</FooterCarousel>
        <FooterAddress id='contacts'>
          <div>logo</div>
          <nav>
            <FooterList>
              <li>
                <StyledLink to="/" small>
                  О продукте
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/" small>
                  О компании
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/" small>
                  Примеры
                </StyledLink>
              </li>
              <li>
                <StyledLink to="/" small>
                  Коннекторы
                </StyledLink>
              </li>
            </FooterList>
          </nav>
          <Button  base type="button">
            Написать нам
          </Button>
        </FooterAddress>
      </FlexBoxFooter>
    </FooterContainer>
  );
}
