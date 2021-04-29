import React from 'react';
import AuthTemplate from '../containers/auth/AutoTemplate'
import RegisterForm from '../containers/auth/RegisterForm'


const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm></RegisterForm>
    </AuthTemplate>
  );
}

export default RegisterPage;
