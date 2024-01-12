import * as React from 'react';
import {
  MenuContainer,
  LogoContainer,
  NavContainer,
  Link,
  Button,
  ButtonContainer,
  LinkEntry,
} from '../../styles/components/headerStyles';
import Logo from './Logo';

export default function NavBar(): JSX.Element {
  return (
    <>
      <MenuContainer>
        <LogoContainer>
          {' '}
          <Logo />{' '}
        </LogoContainer>
        <NavContainer>
          <Link>Отчеты</Link>
          <Link>Данные</Link>
          <Link>Помощь</Link>
          <Link>Контакты</Link>
        </NavContainer>
        <ButtonContainer>
          <LinkEntry>Вход</LinkEntry>
          <Button>Заявка</Button>
        </ButtonContainer>
      </MenuContainer>
    </>
  );
}
