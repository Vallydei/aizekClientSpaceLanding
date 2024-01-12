import React from 'react';
import CluesArticle from './ui/mainContainer/CluesArticle';
import { MainContainer } from './styles/components/mainContainerStyles';
import PossibilitiesArticle from './ui/mainContainer/PossibilitiesArticle';
import Form from './ui/mainContainer/Form';

export default function LandingPage(): JSX.Element {
  return (
    <MainContainer>
      <CluesArticle />
      <PossibilitiesArticle/>
      <Form/>
    </MainContainer>
  );
}
