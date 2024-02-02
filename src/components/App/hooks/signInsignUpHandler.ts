import axios from 'axios';
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type SumbmitHandlerType = {
  apiPath: string;
  navigateTo: string;
  textError: string;
};

export const useSubmitHandler = (props: SumbmitHandlerType) => {
  const navigate = useNavigate();
  let errorMessageDisplayed = false;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await axios.post(props.apiPath, formData);
      e.currentTarget.reset();
      navigate(props.navigateTo);
    } catch (error) {
      const formInputs = document.getElementsByClassName('formInput');
      for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].classList.add('errorInput');
      }

      if (!errorMessageDisplayed) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = props.textError;
        errorMessage.classList.add('errorMessage');
        const buttonContainer = document.querySelector('.errorMsgContainer');
        if (buttonContainer) {
          buttonContainer.appendChild(errorMessage);
          errorMessageDisplayed = true;
          setTimeout(() => {
            errorMessage.remove();
            errorMessageDisplayed = false;
          }, 5000);
          console.log(error);
        }
      }
    }
  };

  return handleSubmit;
};

// this._axiosConfig = {
//   validateStatus: (status: number) => status < 526,
//   timeout: 120_000,
//   withCredentials: false,
//   reRequest: true,
//   headers: {
//     Realm: this._realm,
//     'Content-Type': 'application/json',
//   },
// };

// this._axiosInstance = axios.create(this._axiosConfig);
