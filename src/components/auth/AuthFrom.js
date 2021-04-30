import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import palette from '../../lib/styles/palette'
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h2 {
    margin: 3rem;
    color: black;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 3rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1rem solid rgba(2, 7, 21, 0.2);
  border-radius: 0.5rem;
  width: 50vh;
`;

const FieldSet = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 1rem;
  border: none;
`;

const InputEl = styled.input`
  height: 2rem;
  margin: 1.5rem 0rem;
  font-size: 1rem;
  padding-left: 0.2rem;
  border: none;
  border-bottom: 0.1rem solid rgba(2, 7, 21, 0.2);
  background: #f3eeee;

  &:focus {
    outline: none;
    border-bottom: 2px solid #2b66ff;
  }
`;
const textMap = {
  login: ['Log in', '로그인', '카카오', '구글'],
  register: ['Sign up', '회원가입'],
  mypage: ['My page', '수정', '탈퇴하기'],
};

const AuthForm = ({ type }) => {
  const text = textMap[type];

  const [loginInputs, setLoginInputs] = useState({
    email: '',
    password: '',
  });

  const loginOnChange = (e) => {
    const { value, name } = e.target;
    setLoginInputs({
      ...loginInputs,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(loginInputs);
  };

  return (
    <AuthFormBlock>
      <h2>{text}</h2>

      <Container>
        <form onSubmit={onSubmitHandler}>
          <FieldSet>
            <label>email</label>
            <InputEl type="text" name="email" onChange={loginOnChange} />
            {type === 'register' && (
              <>
                <label>username</label>
                <InputEl type="text" />
              </>
            )}
            {type === 'mypage' && (
              <>
                <label>username</label>
                <InputEl type="text" />
              </>
            )}
            <label>PW</label>
            <InputEl type="password" name="password" onChange={loginOnChange} />
            {type === 'register' && (
              <>
                <label>PW confirm</label>
                <InputEl type="password" />
              </>
            )}
            {type === 'mypage' && (
              <>
                <label>PW confirm</label>
                <InputEl type="password" />
              </>
            )}
          </FieldSet>
          {type === 'login' && (
            <>
              <Button sideButton type="submit">
                {text[1]}
              </Button>
              <div>
                <Button sideButton>{text[2]}</Button>
                <Button sideButton>{text[3]}</Button>
              </div>
            </>
          )}
          {type === 'register' && <Button sideButton>회원가입</Button>}
          {type === 'mypage' && (
            <>
              <div>
                <Button sideButton>{text[1]}</Button>
                <Button sideButton>{text[2]}</Button>
              </div>
            </>
          )}
        </form>
      </Container>
    </AuthFormBlock>
  );
};

export default AuthForm;
