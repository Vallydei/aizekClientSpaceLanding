import React from 'react';
import { FlexBoxColumn, FlexBoxMainDiv, FlexBoxPossibilitie } from '../FlexBox/FlexBox';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';
import { ImgMain, Imgscheme, LeftContainer, RightContainer } from './mainContainerStyles';

export default function PossibilitiesArticle(): JSX.Element {
  return (
    <FlexBoxColumn>
      <FlexBoxMainDiv>
        <LeftContainer>
          <FlexBoxPossibilitie>
            <Title>
              Ваши данные,
              <br /> ваши настройки
            </Title>
            <Text bigger>
              Получите быстрый доступ к ценым данным и нужную визуализацию для успешного управления
              маркетингом и развития бизнеса. Ваши данные всегда останутся только вашими, благодаря
              многоуровневой системе защиты доступа (вплоть до полной локализации хранения данных).
            </Text>
          </FlexBoxPossibilitie>
        </LeftContainer>
        <RightContainer>
          <ImgMain src="./img/radar-back.png" alt="диаграмма 2" />
        </RightContainer>
      </FlexBoxMainDiv>

      <FlexBoxMainDiv>
        <LeftContainer>
          <ImgMain src="./img/planfact-back.png" alt="диаграмма 3" />
        </LeftContainer>
        <RightContainer>
          <FlexBoxPossibilitie>
            <Title>
              План-факт на автомате
              <br /> в нужных разрезах и ярких графиках
            </Title>
            <Text bigger>
              Сравнивайте фактические результаты с запланированными, быстро проверяйте гипотезы и
              находите новые источники роста для вашего бренда.
            </Text>
          </FlexBoxPossibilitie>
        </RightContainer>
      </FlexBoxMainDiv>

      <FlexBoxMainDiv>
        <LeftContainer>
          <FlexBoxPossibilitie>
            <Title>Инсайты</Title>
            <Text bigger>
              Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых
              аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного
              окружения и трендов.
            </Text>
          </FlexBoxPossibilitie>
        </LeftContainer>
        <RightContainer>
          <ImgMain src="./img/cjm-back.png" alt=" " />
          <Imgscheme src="./img/cjm-modeling 2.png" alt="модель" />
        </RightContainer>
      </FlexBoxMainDiv>
    </FlexBoxColumn>
  );
}
