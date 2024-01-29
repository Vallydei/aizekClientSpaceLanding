import React from 'react';
import CluesArticle from './cluesBlock/CluesArticle';
import PossibilitiesArticle from './PossibilitiesArticle';
import Form from './aplicationBlock/Form';
import First from './firstBlock/First';
import SwiperComponent from './pricesBlock/SwiperComponent';
import './pricesBlock/lastBlockStyles.css';
import LogoSwiper from './logoBlock/LogoSwiper';

export default function MainPage() {
  return (
    <>
      <First />
      <main className="mainContainer">
        <CluesArticle />
        <LogoSwiper />
        <PossibilitiesArticle />
        <Form />
      </main>
      <SwiperComponent />
    </>
  );
}
