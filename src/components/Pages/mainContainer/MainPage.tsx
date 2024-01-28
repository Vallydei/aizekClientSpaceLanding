import React from 'react';
import CluesArticle from './CluesArticle';
import PossibilitiesArticle from './PossibilitiesArticle';
import Form from './Form';
import First from './First';
import SwiperComponent from './SwiperComponent';
import './lastBlockStyles.css';

const footerProps = {
  title: 'Простые цены',
  text: 'Почти все наши клиенты выбирают опцию “Оптимум”, т.к. почти всем нужны специфические данные и графики. Опция “Оптимум” позволяет сохранить гибкость и экономичность, постепенно расширяя функционал.',
};

export default function MainPage() {
  return (
    <>
      <First />
      <main className="mainContainer">
        <CluesArticle />
        <PossibilitiesArticle />
        <Form />
      </main>
      <div className="pricesContainer" >
        <div className="flexBoxPrices" id="prices">
          <h2 className="pricesTitle">{footerProps.title}</h2>
          <p className="pricesText">{footerProps.text}</p>
          <SwiperComponent />
        </div>
      </div>
    </>
  );
}
