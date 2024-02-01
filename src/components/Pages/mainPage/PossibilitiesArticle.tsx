import React from 'react';
import { Title } from '../../App/commonComponents/Title/Title';
import { Text } from '../../App/commonComponents/Text/Text';
import './mainContainerStyle.css';

const possibilitieProps = [
  {
    id: 1,
    title: 'Ваши данные, ваши настройки',
    text: 'Получите быстрый доступ к ценным данным и нужную визуализацию для успешного управления маркетингом и развития бизнеса. Ваши данные всегда останутся только вашими, благодаря многоуровневой системе защиты доступа (вплоть до полной локализации хранения данных).',
    textMob:
      'Получите быстрый доступ к ценым данным и нужную визуализацию для успешного управления маркетингом и развития бизнеса. Безопасно.',
    srcImg: './img/stats-1.svg',
  },
  {
    id: 2,
    title: 'План-факт на автомате в нужных разрезах и ярких графиках',
    text: 'Сравнивайте фактические результаты с запланированными, быстро проверяйте гипотезы и находите новые источники роста для вашего бренда.',
    textMob:
      'Сравнивайте фактические результаты с запланированными, быстро проверяйте гипотезы и находите новые источники роста для вашего бренда.',
    srcImg: './img/stats-2.svg',
  },
  {
    id: 3,
    title: 'Инсайты',
    text: 'Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного окружения и трендов.',
    textMob:
      'Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного окружения и трендов.',
    srcImg: './img/stats-3.svg',
  },
];

export default function PossibilitiesArticle(): JSX.Element {
  return (
    <div className="reportsContainer" id="reports">
      {possibilitieProps.map((possibilitie, index) => (
        <div className="flexBoxReports">
          <div
            style={{ order: index === 1 ? 1 : 'auto' }}
            key={possibilitie.id}
            className="contText"
          >
            <Title>{possibilitie.title}</Title>
            <Text className="bigger">
              {window.innerWidth > 460 ? possibilitie.text : possibilitie.textMob}
            </Text>
          </div>
          <div className="contImg">
            <img className="imgMain" src={possibilitie.srcImg} alt="диаграмма" />
          </div>
        </div>
      ))}
    </div>
  );
}
