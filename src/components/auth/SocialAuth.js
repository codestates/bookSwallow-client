import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
`;

const Line = styled.div`
  border-bottom: 2px solid ${palette.border};
  opacity: 0.3;
  margin: 1.5rem 0;
  width: 100%;
`;

const Title = styled.span`
  position: relative;
  ::after {
    position: absolute;
    bottom: 4px;
    left: -7px;
    display: inline-block;
    width: 100%;
    height: 16px;
    padding: 0 7px;
    background: ${palette.brown};
    content: '';
    z-index: -1;
  }
  ${(props) =>
    props.sns &&
    css`
      ::after {
        top: 5px;
      }
      font-size: 1.2rem;
      font-weight: 500;
    `}
`;

const SnsButton = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  div {
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    img {
      cursor: pointer;
    }
    img + img {
      margin-right: 20px;
    }
  }
`;

const SocialAuth = ({ googleLoginHandler, kakaoLoginHandler }) => {
  return (
    <Wrapper>
      <Line />
      <SnsButton>
        <Title sns>SNS 계정 로그인</Title>
        <div>
          <img
            src="/images/sns-google.png"
            alt=""
            onClick={googleLoginHandler}
          />
          <img src="/images/sns-kakao.png" alt="" onClick={kakaoLoginHandler} />
        </div>
      </SnsButton>
    </Wrapper>
  );
};

export default SocialAuth;
