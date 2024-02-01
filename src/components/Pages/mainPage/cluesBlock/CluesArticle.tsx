import React from 'react';
import { Title } from '../../../App/commonComponents/Title/Title';

const articleProps = {
  title: 'Ключевые выгоды',
  articleDescription:
    'Вместо того, чтобы часами копировать и вставлять, приводить к одному формату, проверять данные на целостность, ваша команда наконец-то займется работой, которую пока не могут выполнять роботы. А вы повысите ROI на ФОТ.',
};

const articleContent = [
  {
    id: 1,
    title: 'В 5 раз быстрее сбор отчетов',
    hrefSvg: './svg/IconPlanning.svg#planning',
    text: 'Посчитайте время, которое вы сэкономите по сравнению с ручными выгрузками или старыми скриптами, которые постоянно надо чинить',
   
  },
  {
    id: 2,
    title: 'Натройка под вашу задачу',
    hrefSvg: './svg/IconComputer.svg#computer',
    text: 'У вас постоянно появляются новые гипотезы, источники данных, а значит - требования к содержанию и формату отчетов',
    
  },
  {
    id: 3,
    title: 'Данные для умных решений',
    hrefSvg: './svg/IconSpeed.svg#speed',
    text: 'Конечно, автоматические отчеты не заменят ваш опыт и вашу интуицию. Но подскажут как улучшить достижение KPI.',
    
  },
];

export default function CluesArticle(): JSX.Element {
  return (
    <div className="flexBoxContainer">
      <Title>{articleProps.title}</Title>
      <div className="flexBoxTextContainer">
        <p>{articleProps.articleDescription}</p>
      </div>
      <div className="boxSection">
        {articleContent.map((clue) => (
          <div className="flexBoxSection" key={clue.id}>
            <svg
              className="iconSection"
              width="60"
              height="60"
              viewBox="0 0 60 60"
              fill="#ef2a82"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href={clue.hrefSvg}></use>
            </svg>
            <div>
              <h3 className="sectionTitle">{clue.title}</h3>
              <p>{clue.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
