import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  .right > img {
    width: 700px;
  }
`;

function Main() {
  return (
    <>
      <Container>
        <div className="left">
          <div>Logo</div>
          <div>BookSwallow</div>
          <div>Do you like a book</div>
        </div>
        <div className="right">
          <img src="/images/mainImage.jpeg" alt="메인이미지" />
        </div>
      </Container>
    </>
  );
}

export default Main;
