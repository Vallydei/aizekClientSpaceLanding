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
          <StyledLink to="/#reports"  onClick={(e) => {e.preventDefault(); document.getElementById('reports')?.scrollIntoView({ behavior: 'smooth' })}} >Отчеты</StyledLink>
          <StyledLink to="/#data" onClick={(e) => {e.preventDefault(); document.getElementById('data')?.scrollIntoView({ behavior: 'smooth' })}}>Данные</StyledLink>
          <StyledLink to="/#help" onClick={(e) => {e.preventDefault(); document.getElementById('help')?.scrollIntoView({ behavior: 'smooth' })}}>Помощь</StyledLink>
          <StyledLink to="/#contacts" onClick={(e) => {e.preventDefault(); document.getElementById('contacts')?.scrollIntoView({ behavior: 'smooth' })}}>Контакты</StyledLink>
        </FlexBoxRow>
        <FlexBoxRow jcEnd>
          <StyledLink to="/signin">Вход</StyledLink>
          <Button base>Заявка</Button>
        </FlexBoxRow>
      </FlexBoxNav>
    </>
  );
}
