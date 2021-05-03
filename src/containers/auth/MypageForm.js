import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import AuthForm from '../../components/auth/AuthFrom';



const RegisterForm = () => {

    const [mypageInput,setMypageInput] = useState({
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
            setMypageInput(data)
          } else {
              return
            }
      }
    
      console.log("마이페이지 정보",mypageInput)

    return (
        <AuthForm 
            type="mypage"
            onSubmitHand={onSubmitHand}
        >
        </AuthForm>
    )
}

export default RegisterForm