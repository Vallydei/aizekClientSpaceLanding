import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUpPageStyles.css';
import '../../App/commonComponents/Form/formStyles.css';
import axios from 'axios';

type State = {
  userName: string;
  email: string;
  company: string;
  password: string;
  errors: IFieldErrors;
  isSubmitted: boolean;
};

type SumbmitHandlerType = {
  apiPath: string;
  navigateTo: string;
};

enum Errors {
  REQUIRED_FIELDS = 'Пожалуйста, заполните все обязательные поля',
  MIN_LENGTH = 'Слишком короткое значение',
  INVALID_EMAIL = 'Введите корректный e-mail',
}

interface IFieldErrors {
  userName?: Errors;
  password?: Errors;
  email?: Errors;
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
  const [showNotification, setShowNotification] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState(false);

  const signUpPageProps: SumbmitHandlerType = {
    apiPath: '/api/portal/client/access-request/',
    navigateTo: './aizekClientSpaceLanding/succsess',
  };

  const [input, setInput] = useState<State>({
    userName: '',
    email: '',
    company: '',
    password: '',
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
    const { userName, email, company, password } = input;
    const errors: IFieldErrors = {};

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

    if (userName.length === 0) {
      errors.userName = Errors.REQUIRED_FIELDS;
    }
    if (password.length === 0) {
      errors.password = Errors.REQUIRED_FIELDS;
    } else if (password.length < 6) {
      errors.password = Errors.MIN_LENGTH;
    }

    return errors;
  };

  const showInvalidNotification = (errorMessage: string) => {
    setShowNotification(errorMessage);
    setTimeout(() => {
      setShowNotification(null);
    }, 3000);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const errors: IFieldErrors = validateFields();

    if (Object.keys(errors).length) {
      setInput((prevState) => ({
        ...prevState,
        errors,
        isSubmitted: false,
      }));

      const showError = (errorField: string) => {
        showInvalidNotification(errorField);
      };

      if (errors.userName) {
        showError(errors.userName);
      } else if (errors.company) {
        showError(errors.company);
      } else if (errors.email) {
        showError(errors.email);
      } else if (errors.password) {
        showError(errors.password);
      }
      return;
    }
    try {
      await axios.post(signUpPageProps.apiPath, {
        userName: input.userName,
        email: input.email,
        organisation: input.company,
      });

      setInput({
        errors: {},
        userName: '',
        email: '',
        company: '',
        password: '',
        isSubmitted: true,
      });
    } catch (error) {
      setInput((prevState) => ({
        ...prevState,
        errors,
        isSubmitted: false,
      }));
      console.error('Error submitting form:', error);
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
        <input
          className={`formInput ${input.errors.userName ? 'errorInput' : ''}`}
          name="userName"
          type="text"
          placeholder="Имя"
          onChange={handleInputChange}
          value={input.userName}
        />
        <input
          className={`formInput ${input.errors.company ? 'errorInput' : ''}`}
          name="company"
          type="text"
          placeholder="Название компании"
          onChange={handleInputChange}
          value={input.company}
          maxLength={1000}
          autoComplete="off"
        />
        <input
          className={`formInput ${input.errors.email ? 'errorInput' : ''}`}
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
        <input
          className={`formInput ${input.errors.password ? 'errorInput' : ''}`}
          name="password"
          type="text"
          placeholder="Пароль *****"
          onChange={handleInputChange}
          value={input.password}
        />
        <textarea
          className="formTextarea"
          name="message"
          placeholder="Комментарий в свободной форме"
        />
        {showNotification && (
          <div className="notification notificationSignUp">{showNotification}</div>
        )}
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
