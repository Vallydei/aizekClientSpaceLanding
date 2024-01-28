import React from 'react';
import { Title } from '../../App/commonComponents/Title/Title';
import Button from '../../App/commonComponents/Button/Button';

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
    <div className="formApplicationContainer">
      <form className=" formStyled formApplication" onSubmit={(e) => sumbmitHandler(e)}>
        <div className="formBackground" id="z">
          <Title medium>Узнать больше и протестировать продукт</Title>
          <p className='formText'>
            Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную
            демонстрацию
          </p>
        </div>

        <input className="formInput" name="name" type="text" placeholder="Имя" />
        <input className="formInput" name="email" type="email" placeholder="Email" />
        <textarea className="formTextarea" name="message" placeholder="Ваш вопрос" />
        <Button type="submit">Отправить запрос</Button>
      </form>
    </div>
  );
}
