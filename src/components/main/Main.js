import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  font-family: 'IM Fell French Canon';

  .left {
    margin-top: 10rem;
    position: relative;
    left: 10rem;
  }
  .left > .left__logo {
    font-size: 5rem;
    display: inline-block;
    margin-right: 20px;
  }
  .left > .left__logo > img {
    width: 8rem;
  }
  .left > .left__title {
    font-size: 5rem;
    display: inline-block;
  }

  .left > .left__content {
    margin-top: 5rem;
    margin-left: 3rem;
    font-size: 3rem;
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
          <span className="left__logo">
            <img src="/images/Logo.png" alt="" />
          </span>
          <span className="left__title">BookSwallow</span>
          <div className="left__content">Do you like a book?</div>
        </div>
        <div className="right">
          <img src="/images/mainImage.png" alt="메인이미지" />
        </div>
      </Container>
    </>
  );
}

export default Main;
