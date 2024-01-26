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
        <Title medium>Зарегистрируйтесь и получите доступ</Title>
        <FormText>
          Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную демонстрацию
        </FormText>
      </div>

      <input className="formInput" name="name" type="text" placeholder="Имя" />
      <input className="formInput" name="company" type="text" placeholder="Название компании" />
      <input
        className="formInput"
        name="email"
        type="email"
        placeholder="Email (используется в качестве основного логина)"
      />
      <input className="formInput" name="password" type="text" placeholder="Пароль *****" />
      <textarea
        className="formTextarea"
        name="message"
        placeholder="Комментарий в свободной форме"
      />
      <div><Button type="submit">Зарегистрироваться</Button>
    <span>Есть логин? <Link to='/auth'>Вход в систему</Link></span></div>
      
    </FormStyled>
  );
}
