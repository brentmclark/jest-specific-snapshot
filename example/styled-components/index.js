import styled from 'styled-components';
import React from 'react';

// eslint-disable-next-line no-unused-vars
const StyledDiv = styled.div`
  color: green;
`;

function SampleComponent() {
  return (
    <StyledDiv>
      <h1>I am a title</h1>
    </StyledDiv>
  );
}

export default SampleComponent;
