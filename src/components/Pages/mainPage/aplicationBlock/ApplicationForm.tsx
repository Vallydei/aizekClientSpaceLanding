import React, { useRef, useState } from 'react';
import { ButtonLarge } from '../../../App/commonComponents/Button/Button';
import axios from 'axios';

enum Errors {
  REQUIRED_FIELDS = 'Пожалуйста, заполните все обязательные поля',
  MIN_LENGTH = 'Слишком короткое значение',
  INVALID_EMAIL = 'Введите корректный e-mail',
}

interface IFieldErrors {
  email?: Errors;
  userName?: Errors;
}

export default function ApplicationForm() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const userRef = useRef<HTMLInputElement | null>(null);
  const [showNotification, setShowNotification] = useState<string | null>(null);

  const [input, setInput] = useState<{
    email: string;
    userName: string;
    errors: IFieldErrors;
    isSubmitted: boolean;
  }>({
    email: '',
    userName: '',
    errors: {},
    isSubmitted: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setInput((prev) => ({
      ...prev,
      errors: { ...prev.errors },
      isSubmitted: false,
      [name]: value.trim(),
    }));
  };

  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const validateFields = (): IFieldErrors => {
    const { email, userName } = input;
    const errors: IFieldErrors = {};

    if (email.length === 0) {
      errors.email = Errors.REQUIRED_FIELDS;
    } else if (email.length < 4) {
      errors.email = Errors.MIN_LENGTH;
    } else if (!validateEmail(email)) {
      errors.email = Errors.INVALID_EMAIL;
    }

    if (userName.length === 0) {
      errors.userName = Errors.REQUIRED_FIELDS;
    }

    return errors;
  };

  const showInvalidNotification = (errorMessage: string) => {
    setShowNotification(errorMessage);
    setTimeout(() => {
      setShowNotification(null);
    }, 3000);
  };

  const sumbmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const errors = validateFields();
    const hasErrors = Object.keys(errors).length > 0;

    setInput((prev) => ({ ...prev, errors, isSubmitted: true }));

    if (hasErrors) {
      if (errors.email) {
        inputRef.current?.classList.add('errorInput');
        showInvalidNotification(errors.email);
      }
      if (errors.userName) {
        userRef.current?.classList.add('errorInput');
        showInvalidNotification(errors.userName);
      }
      return;
    }

    const response = await axios.post('https://clientspace.ru/api/portal/client/access-request/', {
      email: input.email,
      name: input.userName,
    });

    if (response.data.error) {
      setInput((prev) => ({ ...prev, errors, isSubmitted: false }));
    } else {
      setInput({ email: '', userName: '', errors: {}, isSubmitted: true });
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
        {showNotification && <div className="notification">{showNotification}</div>}
        <textarea className="formTextarea" name="message" placeholder="Ваш вопрос" />
        <ButtonLarge type="submit">Отправить запрос</ButtonLarge>
      </form>
    </div>
  );
}
