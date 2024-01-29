import React from 'react';
import GlobalStyles from './global';
import Footer from './commonComponents/footerContainer/Footer';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../Pages/mainPage/MainPage';
import SignInPage from '../Pages/signIn/SignIn';
import SignUpPage from '../Pages/signUp/SignUp';
import OptionNavbar from './commonComponents/headerContainer/navBar/OptionalNavBar';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <OptionNavbar />
      <Routes>
        <Route path="/aizekClientSpaceLanding" element={<MainPage />} />
        <Route path="/aizekClientSpaceLanding/auth" element={<SignInPage />} />
        <Route path="/aizekClientSpaceLanding/signup" element={<SignUpPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
