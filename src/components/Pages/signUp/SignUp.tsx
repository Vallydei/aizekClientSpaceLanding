import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './signUpPageStyles.css';
import '../../App/commonComponents/Form/formStyles.css';
// import { useSubmitHandler } from '../../App/hooks/signInsignUpHandler';
import type { SumbmitHandlerType } from '../../App/hooks/signInsignUpHandler';
import axios from 'axios';

type State = {
  email: string;
  company: string;
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
  company?: Errors;
  [key: string]: Errors | undefined;
}

const signupPageContent = {
  text: 'Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную демонстрацию',
  textMob: 'Расскажите про вашу задачу и мы настроим систему под вас',
  placeholderLogin: 'E-mail (используется в качестве основного логина)',
  placeholderLoginMob: 'E-mail (логин)',
  policyTitle: 'Заполняя данную регистрационную форму, вы принимаете ',
  policyTitleMob: 'Регистрируясь, вы принимаете ',
};

export default function SignUpPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const signUpPageProps: SumbmitHandlerType = {
    apiPath: '/api/portal/client/access-request/',
    navigateTo: './aizekClientSpaceLanding/succsess',
    textError: 'Необходимо заполнить все поля',
  };

  const [input, setInput] = useState<State>({
    email: '',
    company: '',
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

    if (name === 'company') {
      setInput((prev) => ({
        ...prev,
        errors: { ...prev.errors },
        isSubmitted: false,
        company: value,
      }));
    }
  };
  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

  const validateFields = (): IFieldErrors => {
    const { email, company } = input;
    const errors: {
      email?: Errors;
      company?: Errors;
    } = {};

    const emailLength = email.length;

    if (emailLength === 0) {
      errors.email = Errors.REQUIRED_FIELDS;
    } else if (emailLength < 4) {
      errors.email = Errors.MIN_LENGTH;
    } else if (!validateEmail(email)) {
      errors.email = Errors.INVALID_EMAIL;
    }

    if (company.length === 0) {
      errors.company = Errors.REQUIRED_FIELDS;
    }

    return errors;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    const { email, company } = input;

    e.preventDefault();

    const errors: IFieldErrors = validateFields();

    if (Object.keys(errors).length) {
      setInput((prevState) => ({
        ...prevState,
        errors,
        isSubmitted: false,
      }));

      if (errors.email) {
        inputRef.current?.focus();
      } else if (errors.company) {
        inputRef.current?.focus();
      }
      return;
    }
    const response = await axios.post(signUpPageProps.apiPath, { email, organisation: company });
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
        company: '',
        isSubmitted: true,
      });
    }
  };

  return (
    <div className="signupPageContainer">
      <form className="formStyled signupForm" onSubmit={handleFormSubmit}>
        <div className="formBackground">
          <h2 className="formTitle">Зарегистрируйтесь и получите доступ</h2>
          <p className="formText">
            {window.innerWidth > 460 ? signupPageContent.text : signupPageContent.textMob}
          </p>
        </div>
        <input className="formInput" name="name" type="text" placeholder="Имя" />
        <input
          ref={inputRef}
          className="formInput"
          name="companyName"
          type="text"
          placeholder="Название компании"
          onChange={handleInputChange}
          value={input.company}
          maxLength={1000}
          autoComplete="off"
        />
        <input
          ref={inputRef}
          className="formInput"
          name="email"
          type="email"
          placeholder={
            window.innerWidth > 460
              ? signupPageContent.placeholderLogin
              : signupPageContent.placeholderLoginMob
          }
          onChange={handleInputChange}
          value={input.email}
          maxLength={1000}
          autoComplete="off"
        />
        <input className="formInput" name="password" type="text" placeholder="Пароль *****" />
        <textarea
          className="formTextarea"
          name="message"
          placeholder="Комментарий в свободной форме"
        />

        <div className="formBtnContainer">
          <button disabled={!isChecked} className="signupBtn" type="submit">
            Зарегистрироваться
          </button>
          <span className="signinSignupSpan">
            Есть логин?{' '}
            <Link className="signinSignupLink" to="/aizekClientSpaceLanding/auth">
              Вход в систему
            </Link>
          </span>
        </div>
        <div className="policyAgreement">
          <label htmlFor="policyAgreement">
            <input
              type="checkbox"
              className="checkboxOrigin"
              id="policyAgreement"
              name="policyAgreement"
              value="policyAgreement"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <div className="checkboxCustom"></div>
          </label>
          <p>
            {window.innerWidth > 460
              ? signupPageContent.policyTitle
              : signupPageContent.policyTitleMob}
            <Link className="signinSignupLink" to="/policy">
              правила сервиса
            </Link>{' '}
            и{' '}
            <Link className="signinSignupLink" to="/dataprocessing">
              обработки персональных данных
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

// const signUpPageProps: SumbmitHandlerType = {
//   apiPath: '/api/auth/signup',
//   navigateTo: './aizekClientSpaceLanding/succsess',
//   textError: 'Необходимо заполнить все поля',
// };

// const sumbmitHandlerSignUp = useSubmitHandler(signUpPageProps);
