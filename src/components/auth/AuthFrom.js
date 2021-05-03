import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h2 {
    color: #111;
    font-size: 2rem;
    font-weight: 800;
    text-align: center;
  }
  .errorMessage {
    color: red;
    font-size: 0.8em;
  }
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
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vh;
`;

const FieldSet = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: none;

  .error {
    border: 1px solid red;
  }
`;

const WrapperInput = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const InputEl = styled.input`
  height: 80px;
  width: 100%;
  font-size: 1rem;
  padding: 36px 19px 28px;
  border: 1px solid ${palette.border};
  ::placeholder {
    font-size: 0.8rem;
    font-weight: lighter;
    color: #999;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #2b66ff;
  }
`;

const LabelText = styled.label`
  position: absolute;
  left: 19px;
  top: 33px;
  color: #888;
  font-size: 15px;
  line-height: 1;
  transition: all 0.4s;
  z-index: 1;
  ${InputEl}:focus ~ & {
    top: 19px;
    font-size: 12px;
  }
  ${InputEl}:valid ~ & {
    top: 19px;
    font-size: 12px;
  }
`;

const Line = styled.div`
  border-bottom: 2px solid ${palette.border};
  opacity: 0.3;
  margin: 1.5rem 0;
  width: 100%;
`;

const WithdrawBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  button {
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const textMap = {
  login: ['로그인', '로그인', '카카오', '구글'],
  register: ['회원가입', '회원가입'],
  mypage: ['My page', '수정', '탈퇴하기'],
};

//올바른 이메일 형식
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//최소 8자 이상이면서, 알파벳과 숫자 및 특수문자(@$!%*#?&)는 하나 이상 포함
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//비밀번호 일치 여부 확인
const isMatch = (password1, password2) => {
  return password1 !== password2;
};

const AuthForm = ({ type, onSubmitHand }) => {
  const text = textMap[type];

  const [state, setState] = useState({
    formErrors: {
      username: '',
      email: '',
      password: '',
      PW_confirm: '',
    },
  });

  const loginOnChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    let formErrors = { ...state.formErrors };

    switch (name) {
      case 'username':
        formErrors.username = value.length < 3 ? '3글자 이상 입력해주세요' : '';
        break;
      case 'PW_confirm':
        formErrors.PW_confirm = isMatch(value, password)
          ? '비밀번호가 일치하지 않습니다'
          : '';
        break;
      case 'email':
        formErrors.email = emailRegex.test(value)
          ? ''
          : '올바른 이메일 형식이 아닙니다';
        break;
      case 'password':
        formErrors.password = passwordRegex.test(value)
          ? ''
          : '8글자 이상, 알파벳과 숫자 및 특수문자 1개 이상 포함해주세요';
        break;
      default:
        break;
    }

    setState({
      ...state,
      formErrors,
      [name]: value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHand(state);
  };

  const { email, username, password, PW_confirm, formErrors } = state;

  return (
    <AuthFormBlock>
      <h2>
        <Title>{text[0]}</Title>
      </h2>

      <Line />

      <form onSubmit={onSubmitHandler}>
        <Container>
          <FieldSet>
            {type === 'login' && (
              <WrapperInput>
                <InputEl
                  type="text"
                  name="email"
                  onChange={loginOnChange}
                  value={email || ''}
                  required
                />
                <LabelText>이메일</LabelText>
              </WrapperInput>
            )}
            {(type === 'register' || type === 'mypage') && (
              <WrapperInput>
                <InputEl
                  className={formErrors.email.length > 0 ? 'error' : null}
                  type="text"
                  name="email"
                  onChange={loginOnChange}
                  value={email || ''}
                  required
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
                <LabelText>이메일</LabelText>
              </WrapperInput>
            )}
            {(type === 'register' || type === 'mypage') && (
              <WrapperInput>
                <InputEl
                  className={formErrors.username.length > 0 ? 'error' : null}
                  type="text"
                  name="username"
                  onChange={loginOnChange}
                  value={username || ''}
                  required
                />
                {formErrors.username.length > 0 && (
                  <span className="errorMessage">{formErrors.username}</span>
                )}
                <LabelText>이름</LabelText>
              </WrapperInput>
            )}
            {type === 'login' && (
              <WrapperInput>
                <InputEl
                  type="password"
                  name="password"
                  onChange={loginOnChange}
                  value={password || ''}
                  required
                />
                <LabelText>비밀번호</LabelText>
              </WrapperInput>
            )}
            {(type === 'register' || type === 'mypage') && (
              <WrapperInput>
                <InputEl
                  className={formErrors.password.length > 0 ? 'error' : null}
                  type="password"
                  name="password"
                  onChange={loginOnChange}
                  value={password || ''}
                  required
                />
                {formErrors.password.length > 0 && (
                  <span className="errorMessage">{formErrors.password}</span>
                )}
                <LabelText>비밀번호</LabelText>
              </WrapperInput>
            )}
            {(type === 'register' || type === 'mypage') && (
              <WrapperInput>
                <InputEl
                  className={formErrors.PW_confirm.length > 0 ? 'error' : null}
                  type="password"
                  name="PW_confirm"
                  onChange={loginOnChange}
                  value={PW_confirm || ''}
                  required
                />
                {formErrors.PW_confirm.length > 0 && (
                  <span className="errorMessage">{formErrors.PW_confirm}</span>
                )}
                <LabelText>비밀번호 확인</LabelText>
              </WrapperInput>
            )}
          </FieldSet>
          {type === 'login' && (
            <Button sideButton fullWidth type="submit">
              {text[1]}
            </Button>
          )}
          {type === 'register' && (
            <Button
              sideButton
              type="submit"
              className={formErrors.buttonBolean ? 'buttonAtv' : null}
              fullWidth
            >
              회원가입
            </Button>
          )}
          {type === 'mypage' && (
            <div style={{ width: '100%' }}>
              <Button sideButton fullWidth type="submit">
                {text[1]}
              </Button>
              <WithdrawBtn>
                <button>{text[2]}</button>
              </WithdrawBtn>
            </div>
          )}
        </Container>
      </form>
    </AuthFormBlock>
  );
};

export default AuthForm;
