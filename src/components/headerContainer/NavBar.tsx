import * as React from 'react';
import Logo from './Logo';
import Button from '../Button/Button';
import { StyledLink } from '../Link/Link';
import { FlexBoxRow } from '../FlexBox/FlexBox';
import { FlexBoxNav } from './headerStyles';

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function NavBar(): JSX.Element {
  return (
    <FlexBoxNav>
      <FlexBoxRow>
        <Logo />
        <StyledLink to="/#reports" onClick={(e) => { e.preventDefault(); scrollToSection('reports'); }}>Отчеты</StyledLink>
        <StyledLink to="/#data" onClick={(e) => { e.preventDefault(); scrollToSection('data'); }}>Данные</StyledLink>
        <StyledLink to="/#help" onClick={(e) => { e.preventDefault(); scrollToSection('help'); }}>Помощь</StyledLink>
        <StyledLink to="/#contacts" onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); }}>Контакты</StyledLink>
      </FlexBoxRow>
      <FlexBoxRow jcEnd>
        <StyledLink to="/signin">Вход</StyledLink>
        <Button base>Заявка</Button>
      </FlexBoxRow>
    </FlexBoxNav>
  );
}
