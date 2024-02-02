import React, { useRef, useState } from 'react';
import Button from '../../../App/commonComponents/Button/Button';
import axios from 'axios';

// type FormInput = {
//   name: string;
//   email: string;
//   message: string;
// };

type State = {
  email: string;
  userName: string;
  errors: IFieldErrors;
  isSubmitted: boolean;
};

enum Errors {
  REQUIRED_FIELDS = 'Пожалуйста, заполните все обязательные поля',
  MIN_LENGTH = 'Слишком короткое значение',
  INVALID_EMAIL = 'Введите корректный e-mail',
}

interface IFieldErrors {
  mail?: Errors;
  userName?: Errors;
  [key: string]: Errors | undefined;
}

export default function ApplicationForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const userRef = useRef<HTMLInputElement | null>(null);

  const [input, setInput] = useState<State>({
    email: '',
    userName: '',
    errors: {},
    isSubmitted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === 'email') {
      setInput((prev) => ({
        ...prev,
        errors: { ...prev.errors },
        isSubmitted: false,
        email: value.trim(),
      }));
    }

    if (name === 'userName') {
      setInput((prev) => ({
        ...prev,
        errors: { ...prev.errors },
        isSubmitted: false,
        userName: value,
      }));
    }
  };
  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const validateFields = (): IFieldErrors => {
    const { email, userName } = input;
    const errors: {
      email?: Errors;
      userName?: Errors;
    } = {};

    const emailLength = email.length;

    if (emailLength === 0) {
      errors.email = Errors.REQUIRED_FIELDS;
    } else if (emailLength < 4) {
      errors.email = Errors.MIN_LENGTH;
    } else if (!validateEmail(email)) {
      errors.email = Errors.INVALID_EMAIL;
    }

    if (userName.length === 0) {
      errors.userName = Errors.REQUIRED_FIELDS;
    }

    return errors;
  };

  const sumbmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    const { email, userName } = input;

    e.preventDefault();

    const errors: IFieldErrors = validateFields();

    if (Object.keys(errors).length) {
      setInput((prevState) => ({
        ...prevState,
        errors,
        isSubmitted: false,
      }));
      console.log(input);
      if (errors.email) {
        inputRef.current?.classList.add('errorInput');
      }
      if (errors.userName) {
        userRef.current?.classList.add('errorInput');
      }
      return;
    }

    const response = await axios.post('https://clientspace.ru/api/portal/client/access-request/', {
      email,
      name: userName,
    });
    if (response.data.error) {
      setInput((prevState) => ({
        ...prevState,
        errors,
        isSubmitted: false,
      }));
    } else {
      setInput({
        errors: {},
        email: '',
        userName: '',
        isSubmitted: true,
      });
    }
  };
  return (
    <div id="application" className="formApplicationContainer">
      <form className=" formStyled formApplication" onSubmit={(e) => sumbmitHandler(e)}>
        <div className="formBackground">
          <h2 className="formTitle">Узнать больше и протестировать продукт</h2>
          <p className="formText">
            Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную
            демонстрацию
          </p>
        </div>

        <input
          ref={userRef}
          onChange={handleInputChange}
          className="formInput"
          name="userName"
          value={input.userName}
          type="text"
          placeholder="Имя"
          maxLength={1000}
          autoComplete="off"
        />
        <input
          ref={inputRef}
          onChange={handleInputChange}
          className="formInput"
          name="email"
          value={input.email}
          type="text"
          placeholder="Email"
          maxLength={1000}
          autoComplete="off"
        />
        <textarea className="formTextarea" name="message" placeholder="Ваш вопрос" />
        <Button type="submit">Отправить запрос</Button>
      </form>
    </div>
  );
}

// const sumbmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   const formData = Object.fromEntries(new FormData(e.currentTarget)) as FormInput;
//   console.log(formData);
//   try {
//     await axios.post('/api/application', formData);
//     e.currentTarget.reset();
//     document.getElementById('nav')!.scrollIntoView({ behavior: 'smooth' });
//   } catch (error) {
//     console.log(error);
//   }
// };
