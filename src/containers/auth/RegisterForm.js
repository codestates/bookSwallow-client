import React, { useEffect, useState } from 'react';
import AuthForm from '../../components/auth/AuthFrom';

const RegisterForm = () => {

  const [registerInput,setResisterInput] = useState({
    email: '',
    username: '',
    password: '',
    PW_confirm: '',
  })

  const onSubmitHand = (data) => {
    if(
      data.email.length > 0 &&
      data.password.length > 0 &&
      data.username.length > 0 &&
      data.PW_confirm.length > 0 &&
      data.formErrors.email.length === 0 &&
      data.formErrors.password.length === 0 &&
      data.formErrors.username.length === 0 &&
      data.formErrors.PW_confirm.length === 0
    ) {
        setResisterInput(data)
      } else {
          return
        }
  }

  console.log("회원가입 정보",registerInput)

  return <AuthForm 
    type="register"
    onSubmitHand={onSubmitHand}
  >
  </AuthForm>;
};

export default RegisterForm;
