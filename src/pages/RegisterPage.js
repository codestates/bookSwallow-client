import React from 'react';
import RegisterForm from '../containers/auth/RegisterForm';
import AuthTemplate from '../containers/auth/AutoTemplate'


const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm></RegisterForm>
    </AuthTemplate>
  )
};

export default RegisterPage;
