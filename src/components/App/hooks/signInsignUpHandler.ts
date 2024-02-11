import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type SumbmitHandlerType = {
  apiPath: string;
  navigateTo: string;
};

enum Errors {
  REQUIRED_FIELDS = 'Пожалуйста, заполните все обязательные поля',
  INVALID_USER_DATA = 'Неверный логин или пароль',
}

const signInPageProps: SumbmitHandlerType = {
  apiPath: '/api/auth/signin',
  navigateTo: './somewhere',
};

export const useSubmitHandler = async (
  e: React.FormEvent<HTMLFormElement>,
  login: string,
  password: string,
  setShowNotification: (errorMessage: string | null) => void,
) => {
  const navigate = useNavigate();


  const showInvalidNotification = (errorMessage: string) => {
    setShowNotification(errorMessage);
    setTimeout(() => {
      setShowNotification(null);
    }, 3000);
  };

  if (login.length === 0 || password.length === 0) {
    const error = Errors.REQUIRED_FIELDS;
    showInvalidNotification(error);
    return;
  }

  const formData = new FormData();
  formData.append('login', login);
  formData.append('password', password);

  try {
    axios.post(signInPageProps.apiPath, formData).then(() => {
      e.currentTarget.reset();
      navigate(signInPageProps.navigateTo)});
  } catch (error) {
    showInvalidNotification(Errors.INVALID_USER_DATA);
  }
};


