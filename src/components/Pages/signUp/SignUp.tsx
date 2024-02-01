import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../App/commonComponents/Button/Button';
import './signUpPageStyles.css';
import '../../App/commonComponents/Form/formStyles.css';
import { useSubmitHandler } from '../../App/hooks/signInsignUpHandler';
import type { SumbmitHandlerType } from '../../App/hooks/signInsignUpHandler';

export default function SignUpPage() {
  const signUpPageProps: SumbmitHandlerType = {
    apiPath: '/api/auth/signup',
    navigateTo: './aizekClientSpaceLanding/succsess',
    textError: 'Необходимо заполнить все поля',
  };
  const sumbmitHandlerSignUp = useSubmitHandler(signUpPageProps);

  return (
    <div className="signupPageContainer">
      <form className="formStyled signupForm" onSubmit={(e) => sumbmitHandlerSignUp(e)}>
        <div className="formBackground">
          <h2 className="formTitle">Зарегистрируйтесь и получите доступ</h2>
          <p className="formText">
            Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную
            демонстрацию{' '}
          </p>
        </div>
        <input className="formInput" name="name" type="text" placeholder="Имя" />
        <input
          className="formInput"
          name="companyName"
          type="text"
          placeholder="Название компании"
        />
        <input
          className="formInput"
          name="email"
          type="text"
          placeholder="E-mail (используется в качестве основного логина)"
        />
        <input className="formInput" name="password" type="text" placeholder="Пароль *****" />
        <textarea
          className="formTextarea"
          name="message"
          placeholder="Комментарий в свободной форме"
        />
        <div className="errorMsgContainer"></div>
        <div className="formBtnContainer">
          <Button type="submit">Зарегистрироваться</Button>
          <span className="signinSignupSpan">
            Есть логин?{' '}
            <Link className="signinSignupLink" to="/aizekClientSpaceLanding/auth">
              Вход в систему
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
