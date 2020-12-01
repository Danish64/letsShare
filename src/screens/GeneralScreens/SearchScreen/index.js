import React from 'react';
import KeyBoardAvoidingContainer from 'res/UniversalComponents/KeyBoardAvoidingContainer.js';
import Container from 'res/UniversalComponents/Container.js';
import SearchBarHeader from '../../../components/GeneralComponents/SearchBarHeader';
//Native Exports Ends Here
//Third Party Exports Starts

//Third Party Exports Ends

const Component = () => {
  return (
    <Container>
      <KeyBoardAvoidingContainer>
        <SearchBarHeader />
      </KeyBoardAvoidingContainer>
    </Container>
  );
};

export default Component;
