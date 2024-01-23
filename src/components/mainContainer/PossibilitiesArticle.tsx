import React from 'react';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import { FlexBoxColumn } from '../FlexBox/FlexBox';
import './mainContainerStyle.css';

const possibilitieProps = [
  {
    id: 1,
    title: 'Ваши данные, ваши настройки',
    text: 'Получите быстрый доступ к ценным данным и нужную визуализацию для успешного управления маркетингом и развития бизнеса. Ваши данные всегда останутся только вашими, благодаря многоуровневой системе защиты доступа (вплоть до полной локализации хранения данных).',
    srcImg: './img/stats-1.svg',
  },
  {
    id: 2,
    title: 'План-факт на автомате в нужных разрезах и ярких графиках',
    text: 'Сравнивайте фактические результаты с запланированными, быстро проверяйте гипотезы и находите новые источники роста для вашего бренда.',
    srcImg: './img/stats-2.svg',
  },
  {
    id: 3,
    title: 'Инсайты',
    text: 'Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного окружения и трендов.',
    srcImg: './img/stats-3.svg',
  },
];

export default function PossibilitiesArticle(): JSX.Element {
  return (
    <FlexBoxColumn>
      {possibilitieProps.map((possibilitie, index) => (
        <div className="flexBoxMainDiv">
          <div  style={{ order: index === 1 ? 1 : 'auto' }}  key={possibilitie.id} className="contText">
            <Title>{possibilitie.title}</Title>
            <Text className="bigger">{possibilitie.text}</Text>
          </div>
          <div className="contImg">
            <img className="imgMain" src={possibilitie.srcImg} alt="диаграмма" />
          </div>
        </div>
      ))}
    </FlexBoxColumn>
  );
}

{
  /* <div className="flexBoxMainDiv">
  <div className="contText">
    <Title>
      Ваши данные,
      <br /> ваши настройки
    </Title>
    <Text className="bigger">
      Получите быстрый доступ к ценным данным и нужную визуализацию для успешного управления
      маркетингом и развития бизнеса. Ваши данные всегда останутся только вашими, благодаря
      многоуровневой системе защиты доступа (вплоть до полной локализации хранения данных).
    </Text>
  </div>
  <div className="contImg">
    <img className="imgMain" src="./img/stats-1.svg" alt="диаграмма 2" />
  </div>
</div>

<div className="flexBoxMainDiv">
  <div className="contImg">
    <img className="imgMain" src="./img/stats-2.svg" alt="диаграмма 3" />
  </div>
  <div className="contText contText_middle">
    <Title>
      План-факт на автомате
      <br /> в нужных разрезах и ярких графиках
    </Title>
    <Text className="bigger">
      Сравнивайте фактические результаты с запланированными, быстро проверяйте гипотезы и
      находите новые источники роста для вашего бренда.
    </Text>
  </div>
</div>

<div className="flexBoxMainDiv">
  <div className="contText">
    <Title>Инсайты</Title>
    <Text className="bigger">
      Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых
      аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного
      окружения и трендов.
    </Text>
  </div>
  <div className="contImg">
    <img className="imgMain" src="img/stats-3.svg" alt=" " />
  </div>
</div> */
}
