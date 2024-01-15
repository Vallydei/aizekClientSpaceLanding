import React from 'react';
// import { Route, HashRouter } from 'react-router-dom';
import GlobalStyles from './global';
import LandingPage from '../LandingPage';
import Header from '../headerContainer/HeaderDescription';
import Footer from '../footerContainer/Footer';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />     
      <Header/>
      <LandingPage />
      {/* <Route path="/" element={} /> */}
      <Footer />
    </>
  );
}

export default App;
