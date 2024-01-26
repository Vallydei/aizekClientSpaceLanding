import React from 'react';
import CluesArticle from './CluesArticle';
import PossibilitiesArticle from './PossibilitiesArticle';
import Form from '../../App/commonComponents/Form/Form';
import First from './First';

export default function MainPage() {
  return (
    <>
      <First />
      <main className="mainContainer">
        <CluesArticle />
        <PossibilitiesArticle />
        <Form />
      </main>
    </>
  );
}
