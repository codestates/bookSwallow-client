import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthFrom';


const RegisterForm = () => {

  const [loginInput,setLoginInput] = useState({
    email: '',
    password: '',
  })



  const onSubmitHand = (data) => {
    if(
      data.email &&
      data.password &&
      data.formErrors.email.length === 0 &&
      data.formErrors.password.length === 0
    ) {
      setLoginInput(data)
      } else {
          return
        }
  }
    
//   console.log("로그인 정보",loginInput)

const {email, password} = loginInput

// if(!email.length || !password.length) {
//   return
// } else {
//     axios
//       .post("https://localhost:4000/signin")
// }

  return (
    <AuthForm 
      type="login"
      onSubmitHand={onSubmitHand}
    >
    </AuthForm>
  )
}

export default RegisterForm