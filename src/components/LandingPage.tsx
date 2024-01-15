import React from 'react';
import { MainContainer } from './mainContainer/mainContainerStyles';
import CluesArticle from './mainContainer/CluesArticle';
import PossibilitiesArticle from './mainContainer/PossibilitiesArticle';
import Form from './Form/Form';

export default function LandingPage(): JSX.Element {
  return (
    <MainContainer>
      <CluesArticle />
      <PossibilitiesArticle />
      <Form />
    </MainContainer>
  );
}
