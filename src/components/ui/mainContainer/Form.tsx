import React from 'react';
import { FormButton, FormForDemostration, FormInput, FormText, FormTextArea, FormTitle, FromBox } from '../../styles/components/formStyles';

export default function Form() {
  return (
    <FormForDemostration>
      <FromBox>
        <FormTitle>Узнать больше и протестировать продукт</FormTitle>
        <FormText>
          Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную демонстрацию
        </FormText>
      </FromBox>

      <FormInput type="text" placeholder="Имя" />
      <FormInput type="email" placeholder="Email" />
      <FormTextArea placeholder="Ваш вопрос" />
      <FormButton type="submit">Отправить запрос</FormButton>
    </FormForDemostration>
  );
}
