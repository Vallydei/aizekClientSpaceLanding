import React from 'react';
import FirstBlock from './firstBlock/FirstBlock';
import CluesArticle from './cluesBlock/CluesArticle';
import LogoSwiper from './logoBlock/LogoSwiper';
import PossibilitiesArticle from './possibilitieBlock/PossibilitiesArticle';
import ApplicationForm from './applicationBlock/ApplicationForm';
import SwiperComponent from './pricesBlock/SwiperComponent';
import './mainPageStyles.css'

export default function MainPage() {
  return (
    <>
      <FirstBlock />
      <main className="mainContainer">
        <CluesArticle />
        <LogoSwiper />
        <PossibilitiesArticle />
        <ApplicationForm />
      </main>
      <SwiperComponent />
    </>
  );
}
