import React from 'react';
import {
  PossibilitieImg,
  PossibilitieDescription,
  Possibilitie,
  PossibilitiesArticleBox,
  PossibilitieTitle,
  PossibilitieText,
  PossibilitieLeftContainer,
  PossibilitieRightContainer,
  ImageScheme,
} from '../../styles/components/possibilitiesArticleStyles';

export default function PossibilitiesArticle(): JSX.Element {
  return (
    <PossibilitiesArticleBox>
      <Possibilitie>
        <PossibilitieLeftContainer>
          <PossibilitieDescription>
            <PossibilitieTitle>
              Ваши данные,
              <br /> ваши настройки
            </PossibilitieTitle>
            <PossibilitieText>
              Получите быстрый доступ к ценым данным и нужную визуализацию для успешного управления
              маркетингом и развития бизнеса. Ваши данные всегда останутся только вашими, благодаря
              многоуровневой системе защиты доступа (вплоть до полной локализации хранения данных).
            </PossibilitieText>
          </PossibilitieDescription>
        </PossibilitieLeftContainer>
        <PossibilitieRightContainer>
          <PossibilitieImg src="./img/radar-back.png" alt="диаграмма 2" />
        </PossibilitieRightContainer>
      </Possibilitie>

      <Possibilitie>
        <PossibilitieLeftContainer>
          <PossibilitieImg src="./img/planfact-back.png" alt="диаграмма 3" />
        </PossibilitieLeftContainer>
        <PossibilitieRightContainer>
          <PossibilitieDescription>
            <PossibilitieTitle>
              План-факт на автомате
              <br /> в нужных разрезах и ярких графиках
            </PossibilitieTitle>
            <PossibilitieText>
              Сравнивайте фактические результаты с запланированными, быстро проверяйте гипотезы и
              находите новые источники роста для вашего бренда.
            </PossibilitieText>
          </PossibilitieDescription>
        </PossibilitieRightContainer>
      </Possibilitie>

      <Possibilitie>
        <PossibilitieLeftContainer>
          <PossibilitieDescription>
            <PossibilitieTitle>Инсайты</PossibilitieTitle>
            <PossibilitieText>
              Стройте аналитику, чтобы лучше понимать характеристики и поведение ваших целевых
              аудиторий, позиции бренда в сердцах, на полках и в кошельках с учетом конкурентного
              окружения и трендов.
            </PossibilitieText>
          </PossibilitieDescription>
        </PossibilitieLeftContainer>
        <PossibilitieRightContainer>
          <PossibilitieImg src="./img/cjm-back.png" alt=" " />
          <ImageScheme src="./img/cjm-modeling 2.png" alt="модель" />
        </PossibilitieRightContainer>
      </Possibilitie>
    </PossibilitiesArticleBox>
  );
}
