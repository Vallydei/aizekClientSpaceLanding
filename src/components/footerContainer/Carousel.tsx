import React from 'react';
import { ButtonPrices, CarouselComponent } from './carousel';
import { Text } from '../Text/Text';
import { FlexBoxColumn } from '../FlexBox/FlexBox';


function Carousel(): JSX.Element {
  return (
    <>
      <CarouselComponent id='data'>
        <FlexBoxColumn>
          <h3>Стандарт</h3>
          <Text bigger>(из коробки)</Text>
        </FlexBoxColumn>
        <FlexBoxColumn>
          <h1>₽15 000</h1>
          <Text>в месяц</Text>
        </FlexBoxColumn>
        <FlexBoxColumn>
        <ButtonPrices >Запрос</ButtonPrices>
        </FlexBoxColumn>
      </CarouselComponent>
      <CarouselComponent>
        {' '}
        <h3>Оптимум</h3>
        <Text bigger>+1 коннектор, отчет</Text>
        <h1>₽35 000</h1>
        <Text>в месяц</Text>
        <ButtonPrices >Запрос</ButtonPrices>
      </CarouselComponent>
      <CarouselComponent>
        {' '}
        <h3>Премиум</h3>
        <Text bigger>настройка под вас</Text>
        <h1>?</h1>
        <Text>все обсуждается</Text>
        <ButtonPrices >Запрос</ButtonPrices>
      </CarouselComponent>
    </>
  );
}
export default Carousel;
