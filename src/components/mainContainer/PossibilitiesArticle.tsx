import React from 'react';
import { FlexBoxColumn } from '../FlexBox/FlexBox';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import { ContImg, ContText, FlexBoxMainDiv, ImgMain } from './mainContainerStyles';

export default function PossibilitiesArticle(): JSX.Element {
  return (
    <FlexBoxColumn>
      <FlexBoxMainDiv>
        <ContText>
          <Title>
            Ваши данные,
            <br /> ваши настройки
          </Title>
          <Text bigger>
            Получите быстрый доступ к ценым данным и нужную визуализацию для успешного управления
            маркетингом и развития бизнеса. Ваши данные всегда останутся только вашими, благодаря
            многоуровневой системе защиты доступа (вплоть до полной локализации хранения данных).
          </Text>
        </ContText>
        <ContImg>
          <ImgMain src="./img/stats-1.svg" alt="диаграмма 2" />
        </ContImg>
      </FlexBoxMainDiv>

      <FlexBoxMainDiv>
        <ContImg>
          <ImgMain src="./img/stats-2.svg" alt="диаграмма 3" />
        </ContImg>

        <ContText>
          <Title>
            План-факт на автомате
            <br /> в нужных разрезах и ярких графиках
          </Title>
          <Text bigger>
            Сравнивайте фактические результаты с запланированными, быстро проверяйте гипотезы и
            находите новые источники роста для вашего бренда.
          </Text>
        </ContText>
      </FlexBoxMainDiv>

      <FlexBoxMainDiv>
        <ContText>
          <Title>Инсайты</Title>
          <Text bigger>
            Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых
            аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного
            окружения и трендов.
          </Text>
        </ContText>
        <ContImg>
          <ImgMain src="img/stats-3.svg" alt=" " />
        </ContImg>
      </FlexBoxMainDiv>
    </FlexBoxColumn>
  );
}
