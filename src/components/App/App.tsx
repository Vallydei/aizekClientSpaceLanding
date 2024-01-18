import React from 'react';

import GlobalStyles from './global';
import Header from '../headerContainer/HeaderDescription';
import Footer from '../footerContainer/Footer';
import Form from '../Form/Form';
import PossibilitiesArticle from '../mainContainer/PossibilitiesArticle';
import CluesArticle from '../mainContainer/CluesArticle';
import { MainContainer } from '../mainContainer/mainContainerStyles';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MainContainer>
        <CluesArticle />
        <PossibilitiesArticle />
        <Form />
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
