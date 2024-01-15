import React from 'react';
import {
  PossibilitieImg,
  PossibilitieLeftContainer,
  PossibilitieRightContainer,
  ImageScheme,
} from './possibilitiesArticleStyles';
import { FlexBoxColumn, FlexBoxPossibilitie, FlexBoxRow } from '../FlexBox/FlexBox';
import { Title } from '../Title/Title';
import { Text } from '../Text/Text';

export default function PossibilitiesArticle(): JSX.Element {
  return (
    <FlexBoxColumn>
      <FlexBoxRow>
        <PossibilitieLeftContainer>
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
        </PossibilitieLeftContainer>
        <PossibilitieRightContainer>
          <PossibilitieImg src="./img/radar-back.png" alt="диаграмма 2" />
        </PossibilitieRightContainer>
      </FlexBoxRow>

      <FlexBoxRow>
        <PossibilitieLeftContainer>
          <PossibilitieImg src="./img/planfact-back.png" alt="диаграмма 3" />
        </PossibilitieLeftContainer>
        <PossibilitieRightContainer>
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
        </PossibilitieRightContainer>
      </FlexBoxRow>

      <FlexBoxRow>
        <PossibilitieLeftContainer>
          <FlexBoxPossibilitie>
            <Title>Инсайты</Title>
            <Text bigger>
              Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых
              аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного
              окружения и трендов.
            </Text>
          </FlexBoxPossibilitie>
        </PossibilitieLeftContainer>
        <PossibilitieRightContainer>
          <PossibilitieImg src="./img/cjm-back.png" alt=" " />
          <ImageScheme src="./img/cjm-modeling 2.png" alt="модель" />
        </PossibilitieRightContainer>
      </FlexBoxRow>
    </FlexBoxColumn>
  );
}
