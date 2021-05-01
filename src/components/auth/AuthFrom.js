import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import palette from '../../lib/styles/palette'
import Button from '../common/Button';

const AuthFormBlock = styled.div`


  h2 {
    margin: 3rem;
    color: #111;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 3rem;
    text-align: center;
    font-family: sans-serif;
  }

  label {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    color: #222;
    font-weight: lighter;
    margin-top:1.5rem;
  }
      
  background-color: #ffffff;
  box-shadow: 0px 10px 50px #555;
  border-radius: 1rem;
  margin-top: 1.5rem;

  .errorMessage {
    color: red;
    font-size: 0.75em;
    display: relative;
  }
  
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  .error {
    border: 1px solid red;
  }
`;

const InputEl = styled.input`

  height: 2rem;
  font-size: 1rem;
  padding-left: 0.2rem;
  border: 1px solid #cfcfcf;
  border-bottom: 0.1rem solid rgba(2, 7, 21, 0.2);
  margin-bottom:0.25rem;
  border-radius: 0.25rem;

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


const textMap = {
  login: ['Log in', '로그인', '카카오', '구글'],
  register: ['Sign up', '회원가입'],
  mypage: ['My page', '수정', '탈퇴하기'],
};

//올바른 이메일 형식
const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//최소 8자 이상이면서, 알파벳과 숫자 및 특수문자(@$!%*#?&)는 하나 이상 포함
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

//비밀번호 일치 여부 확인
const isMatch = (password1, password2) => {
    return password1 !== password2;
  }


const AuthForm = ({ type, onSubmitHand }) => {
  const text = textMap[type];

  const [state, setState] = useState({
    formErrors: {
      username:"",
      email: "",
      password: "",
      PW_confirm:"",
    }
  });

  const loginOnChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target;
    let formErrors = { ...state.formErrors }; 

    switch (name) {
        case "username":
          formErrors.username =
            value.length < 3 ? "3글자 이상 입력해주세요" : "";
          break;
        case "PW_confirm":
          formErrors.PW_confirm =
          isMatch(value, password) ? "비밀번호가 일치하지 않습니다" : "";
          break;
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "올바른 이메일 형식이 아닙니다";
          break;
        case "password":
          formErrors.password = passwordRegex.test(value)
            ? ""
            : "8글자 이상, 알파벳과 숫자 및 특수문자 1개 이상 포함해주세요";
          break;
        default:
          break;
      }

    setState({
      ...state, formErrors, [name]: value, 
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmitHand(state)
  };

  const {email, username, password, PW_confirm, formErrors} = state

  return (
    <AuthFormBlock>
      <h2>{text[0]}</h2>

    <form
      onSubmit={onSubmitHandler}>
    <Container>
      <FieldSet>
        <>
        <label>email</label>
        <InputEl 
        className={formErrors.email.length > 0 ? "error" : null}
        type="text"
        name="email"
        onChange={loginOnChange}
        value={email || ''}
        />
        {formErrors.email.length > 0 && (
          <span className="errorMessage">{formErrors.email}</span>
        )}
        </>
        {type === 'register' && (
            <>
            <label>username</label>
            <InputEl 
            className={formErrors.username.length > 0 ? "error" : null}
            type="text"
            name="username"
            onChange={loginOnChange}
            value={username || ''}
            />
            {formErrors.username.length > 0 && (
              <span className="errorMessage">{formErrors.username}</span>
            )}
            </>
        )}
        {type === 'mypage' && (
            <>
            <label>username</label>
            <InputEl 
            className={formErrors.username.length > 0 ? "error" : null}
            type="text"
            name="username"
            onChange={loginOnChange}
            value={username || ''}
            />
            {formErrors.username.length > 0 && (
              <span className="errorMessage">{formErrors.username}</span>
            )}
            </>
        )}
        <label>PW</label>
        <InputEl 
        className={formErrors.password.length > 0 ? "error" : null}
        type="password"
        name="password"
        onChange={loginOnChange}
        value={password || ''}
        />
        {formErrors.password.length > 0 && (
          <span className="errorMessage">{formErrors.password}</span>
        )}
        {type === 'register' && (
            <>
            <label>PW confirm</label>
            <InputEl
            className={formErrors.PW_confirm.length > 0 ? "error" : null}
            type="password"
            name="PW_confirm"
            onChange={loginOnChange}
            value={PW_confirm || ''}
            />
            {formErrors.PW_confirm.length > 0 && (
              <span className="errorMessage">{formErrors.PW_confirm}</span>
            )}
            </>
        )}
        {type === 'mypage' && (
            <>
            <label>PW confirm</label>
            <InputEl 
            className={formErrors.PW_confirm.length > 0 ? "error" : null}
            type="password"
            name="PW_confirm"
            onChange={loginOnChange}
            value={PW_confirm || ''}
            />
            {formErrors.PW_confirm.length > 0 && (
              <span className="errorMessage">{formErrors.PW_confirm}</span>
            )}

            </>
        )}
      </FieldSet>
      {type === 'login' && (
              <>
                <Button 
                  sideButton 
                  type="submit"
                >
                  {text[1]}
                </Button>
                <div>
                    <Button sideButton type="submit">{text[2]}</Button>
                    <Button sideButton type="submit">{text[3]}</Button>
                </div>
              </>
          )}
          {type === 'register' && (
            <Button 
              sideButton 
              type="submit"
              className={formErrors.buttonBolean ? "buttonAtv" : null}
              >
                회원가입
            </Button>

          )}
          {type === 'register' && <Button sideButton>회원가입</Button>}
          {type === 'mypage' && (

              <>
                <div>
                    <Button sideButton type="submit">{text[1]}</Button>
                    <Button sideButton type="submit">{text[2]}</Button>
                </div>
              </>
          )}
    </Container>
    </form>

    </AuthFormBlock>
)

}


export default AuthForm;


