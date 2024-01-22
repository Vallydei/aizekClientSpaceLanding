import React from 'react';
import GlobalStyles from './global';
import Header from '../headerContainer/HeaderDescription';
import Footer from '../footerContainer/Footer';
import Form from '../Form/Form';
import PossibilitiesArticle from '../mainContainer/PossibilitiesArticle';
import CluesArticle from '../mainContainer/CluesArticle';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className='mainContainer'>
        <CluesArticle />
        <PossibilitiesArticle />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
