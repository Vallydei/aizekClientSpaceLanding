import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../App/commonComponents/Button/Button';
import './signInPageStyles.css';
import '../../App/commonComponents/Form/formStyles.css';
import { SumbmitHandlerType, useSubmitHandler } from '../../App/hooks/signInsignUpHandler';


export default function SignIn() {
  const signInPageProps: SumbmitHandlerType = {
    apiPath: '/api/auth/signin',
    navigateTo: './somewhere',
    textError: 'Неверно введен логин или пароль',
  };
  const sumbmitHandlerSignIn = useSubmitHandler(signInPageProps);

  return (
    <div className="signinPageContainer">
      <form className="formStyled signinForm" onSubmit={(e) => sumbmitHandlerSignIn(e)}>
        <div className="formBackground">
          <h2 className="formTitle">Вход в систему</h2>
          <p className="formText">
            Если у вас еще нет логина и пароля, пожалуйста, пройдите{' '}
            <Link className="signinSignupLink" to="/aizekClientSpaceLanding/signup">
              регистрацию
            </Link>
          </p>
        </div>

        <input className="formInput" name="login" type="text" placeholder="Логин (Email)" />
        <input className="formInput" name="password" type="text" placeholder="Пароль *****" />
        <div className="errorMsgContainer"></div>
        <div className="formBtnContainer">
          <Button type="submit">Войти</Button>
          <span className="signinSignupSpan">
            Нужен логин?{' '}
            <Link className="signinSignupLink" to="/aizekClientSpaceLanding/signup">
              Зарегистрируйтесь
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
