import * as React from 'react';
import Logo from './Logo';
import Button from '../Button/Button';
import { StyledLink } from '../Link/Link';
import { FlexBoxRow } from '../FlexBox/FlexBox';
import { FlexBoxNav } from './headerStyles';

export default function NavBar(): JSX.Element {
  return (
    <>
      <FlexBoxNav>
        <FlexBoxRow>
          <Logo />
          <StyledLink to="/">Отчеты</StyledLink>
          <StyledLink to="/">Данные</StyledLink>
          <StyledLink to="/">Помощь</StyledLink>
          <StyledLink to="/">Контакты</StyledLink>
        </FlexBoxRow>
        <FlexBoxRow jcEnd>
          <StyledLink to="/">Вход</StyledLink>
          <Button base>Заявка</Button>
        </FlexBoxRow>
      </FlexBoxNav>
    </>
  );
}
