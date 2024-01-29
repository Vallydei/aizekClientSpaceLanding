import React from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../App/commonComponents/Button/Button';
import './signUpPageStyles.css';
import '../../App/commonComponents/Form/formStyles.css';

type FormInput = {
  login: string;
  password: string;
};

export default function SignUpPage() {
  const navigate = useNavigate();
  const sumbmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as FormInput;
    try {
      await axios.post('/api/auth/signin', formData);
      e.currentTarget.reset();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signupPageContainer">
      <form className="formStyled" onSubmit={(e) => sumbmitHandler(e)}>
        <div className="formBackground">
          <h2 className="formTitle">Зарегистрируйтесь и получите доступ</h2>
          <p className="formText">
            Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную
            демонстрацию{' '}
          </p>
        </div>
        <input className="formInput" name="name" type="text" placeholder="Имя" />
        <input className="formInput" name="companyName" type="text" placeholder="Название компании" />
        <input className="formInput" name="email" type="text" placeholder="E-mail (используется в качестве основного логина)" />
        <input className="formInput" name="password" type="text" placeholder="Пароль *****" />
        <textarea className="formTextarea" name="message" placeholder="Комментарий в свободной форме" />
        <div className="signinBtnContainer">
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
