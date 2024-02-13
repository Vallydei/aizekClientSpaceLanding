import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signInPageStyles.css';
import '../../App/commonComponents/Form/formStyles.css';
import axios from 'axios';

type SumbmitHandlerType = {
  apiPath: string;
  navigateTo: string;
};

enum Errors {
  REQUIRED_FIELDS = 'Пожалуйста, заполните все обязательные поля',
  INVALID_USER_DATA = 'Неверный логин или пароль',
}

const signInPageProps: SumbmitHandlerType = {
  apiPath: '/api/auth/signin',
  navigateTo: './somewhere',
};

export default function SignInPage() {
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState({
    login: '',
    password: '',
  });
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const useSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const showInvalidNotification = (errorMessage: string) => {
      setShowNotification(errorMessage);
      setTimeout(() => {
        setShowNotification(null);
      }, 3000);
    };

    if (inputValue.login.length === 0 || inputValue.password.length === 0) {
      showInvalidNotification(Errors.REQUIRED_FIELDS);
      return;
    }

    const formData = new FormData(e.currentTarget);

    try {
      axios.post(signInPageProps.apiPath, formData).then(() => {
        e.currentTarget.reset();
        navigate(signInPageProps.navigateTo);
      });
    } catch (error) {
      showInvalidNotification(Errors.INVALID_USER_DATA);
    }
  };

  return (
    <div className="signinPageContainer">
      <form
        className="formStyled signinForm"
        onSubmit={(e) => {
          e.preventDefault();
          useSubmitHandler(e);
        }}
      >
        <div className="formBackground">
          <h2 className="formTitle">Вход в систему</h2>
          <p className="formText">
            Если у вас еще нет логина и пароля, пожалуйста, пройдите{' '}
            <Link className="signinSignupLink" to="/aizekClientSpaceLanding/signup">
              регистрацию
            </Link>
          </p>
        </div>

        <input
          className="formInput"
          onChange={changeHandler}
          name="login"
          type="text"
          placeholder="Логин (Email)"
          value={inputValue.login}
        />
        <input
          className="formInput"
          onChange={changeHandler}
          name="password"
          type="password"
          placeholder="Пароль *****"
          value={inputValue.password}
        />
        {showNotification && (
          <div className="notification notificationSignIn">{showNotification}</div>
        )}
        <div className="formBtnContainer">
          <button className="signinBtn" type="submit">
            Войти
          </button>
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
