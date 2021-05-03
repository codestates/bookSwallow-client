import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

function Loading() {
  return (
    <Container>
      <div>로딩중</div>
    </Container>
  );
}

export default Loading;
