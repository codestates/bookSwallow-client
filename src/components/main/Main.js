import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  .left {
    background-color: red;
  }
  .left > .logo {
    font-size: 5rem;
  }
  .left > span {
    font-size: 5rem;
  }

  .right {
    margin-top: 3rem;
  }
  .right > img {
    width: 500px;
  }
`;

function Main() {
  return (
    <>
      <Container>
        <div className="left">
          <span className="left__logo">Logo</span>
          <span className="left__title">BookSwallow</span>
          <div className="left__content">Do you like a book</div>
        </div>
        <div className="right">
          <img src="/images/mainImage.jpeg" alt="메인이미지" />
        </div>
      </Container>
    </>
  );
}

export default Main;
