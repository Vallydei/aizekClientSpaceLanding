import React from 'react';
import { FormStyled } from '../../App/commonComponents/Form/formStyles';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Title } from '../../App/commonComponents/Title/Title';
import { FormText } from '../../App/commonComponents/Text/Text';
import Button from '../../App/commonComponents/Button/Button';

type FormInput = {
  name: string;
  email: string;
  message: string;
};

export default function SignIn() {
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
    <FormStyled onSubmit={(e) => sumbmitHandler(e)}>
      <div id="z">
        <Title medium>Вход в систему</Title>
        <FormText>Если у вас еще нет логина и пароля, пожалуйста, пройдите регистрацию</FormText>
      </div>

      <input className="formInput" name="login" type="text" placeholder="Логин (Email)" />
      <input className="formInput" name="password" type="text" placeholder="Пароль *****" />

      <div>
        <Button type="submit">Войти</Button>
        <span>
          Есть логин? <Link to="/auth">Вход в систему</Link>
        </span>
      </div>
    </FormStyled>
  );
}
