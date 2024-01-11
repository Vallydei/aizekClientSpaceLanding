import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './components/styles/global';
import NavBar from './components/ui/NavBar';
import { HeaderContainer } from './components/styles/components/header';
import LandingPage from './components/LandingPage';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <HeaderContainer>
        <NavBar />
      </HeaderContainer>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
