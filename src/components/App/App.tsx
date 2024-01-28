import React from 'react';
import GlobalStyles from './global';
import Footer from './commonComponents/footerContainer/Footer';
import { Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/mainContainer/MainPage';
import SignIn from '../Pages/signIn/SignIn';
import SignUp from '../Pages/signUp/SignUp';
import OptionNavbar from './commonComponents/headerContainer/navBar/OptionalNavBar';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <OptionNavbar />
      <Routes>
        <Route path="/aizekClientSpaceLanding/" element={<MainPage />} />
        <Route path="/aizekClientSpaceLanding/auth" element={<SignIn />} />
        <Route path="/aizekClientSpaceLanding/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
