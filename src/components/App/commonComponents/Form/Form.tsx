import React from 'react';
import { Title } from '../Title/Title';
import { FormText } from '../Text/Text';
import Button from '../Button/Button';
import { FormStyled } from './formStyles';
import axios from 'axios';

type FormInput = {
  name: string;
  email: string;
  message: string;
};

export default function Form() {
  const sumbmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.currentTarget)) as FormInput;
    console.log(formData);
    try {
      await axios.post('/api/application', formData);
      e.currentTarget.reset();
      document.getElementById('nav')!.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormStyled onSubmit={(e) => sumbmitHandler(e)}>
      <div id="z">
        <Title medium>Узнать больше и протестировать продукт</Title>
        <FormText>
          Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную демонстрацию
        </FormText>
      </div>

      <input className="formInput" name="name" type="text" placeholder="Имя" />
      <input className="formInput" name="email" type="email" placeholder="Email" />
      <textarea className="formTextarea" name="message" placeholder="Ваш вопрос" />
      <Button type="submit">Отправить запрос</Button>
    </FormStyled>
  );
}
