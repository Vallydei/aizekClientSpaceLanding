import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import GlobalStyles from './components/styles/global';
import NavBar from './components/ui/headerContainer/NavBar';
import { HeaderContainer } from './components/styles/components/headerStyles';
import LandingPage from './components/LandingPage';
import HeaderDescription from './components/ui/headerContainer/HeaderDescription';
import Footer from './components/ui/footerContainer/Footer';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <HeaderContainer>
        <NavBar />
        <HeaderDescription />
      </HeaderContainer>
      <main>
        <HashRouter>
          <Route path="/" element={<LandingPage />} />
        </HashRouter>
      </main>
      <Footer/>
    </>
  );
}

export default App;
