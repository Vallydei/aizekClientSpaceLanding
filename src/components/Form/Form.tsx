import React from 'react';
import { FormForDemostration } from './formStyles';
import { FlexBoxForm } from '../FlexBox/FlexBox';
import { Title } from '../Title/Title';
import { FormText } from '../Text/Text';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import Button from '../Button/Button';

export default function Form() {
  return (
    <FormForDemostration>
      <FlexBoxForm>
        <Title medium>Узнать больше и протестировать продукт</Title>
        <FormText>
          Расскажите про вашу задачу и мы настроим для вас индивидуальную интерактивную демонстрацию
        </FormText>
      </FlexBoxForm>

      <Input type="text" placeholder="Имя" />
      <Input type="email" placeholder="Email" />
      <Textarea placeholder="Ваш вопрос" />
      <Button>Отправить запрос</Button>
    </FormForDemostration>
  );
}
